import React, { useMemo, useState } from 'react';
import { Plus, Minus, Save, ChevronLeft, ChevronRight, Layers, Edit3, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { SlotMachine } from './SlotMachine';
import { getClientIP } from '../lib/utils';
import { ShareModal } from './ShareModal';
import { TEMPLATES } from '../lib/templates';

export const CreateGame: React.FC = () => {
  const [name, setName] = useState('');
  const [slots, setSlots] = useState<string[][]>([['🎉'], ['🎈'], ['🎨']]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdGameId, setCreatedGameId] = useState<string | null>(null);
  const [step, setStep] = useState<number>(0); // 0: name, 1: template, 2: configure, 3: preview & save
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);

  const PLACEHOLDERS = ['Apple, Banana, Grape', 'Red, Blue, Green', 'Today, Tomorrow, Next Week'];

  const canGoNext = useMemo(() => {
    if (step === 0) return name.trim().length > 0;
    if (step === 1) return selectedTemplateId !== null; // 必须选择模版或手动输入
    if (step === 2) return slots.length > 0 && slots.every(s => s.length > 0);
    return true;
  }, [step, name, slots, selectedTemplateId]);

  const addSlot = () => {
    if (slots.length < 5) {
      setSlots([...slots, ['✨']]);
    }
  };

  const removeSlot = (index: number) => {
    if (slots.length > 1) {
      setSlots(slots.filter((_, i) => i !== index));
    }
  };

  const updateSlotValues = (slotIndex: number, value: string) => {
    const newSlots = [...slots];
    newSlots[slotIndex] = value.split(',').map(v => v.trim());
    setSlots(newSlots);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const creatorIP = await getClientIP();

      const { data, error } = await supabase
        .from('slot_games')
        .insert([
          {
            name,
            slots,
            is_locked: true,
            creator_ip: creatorIP
          }
        ])
        .select('id')
        .single();

      if (error) throw error;

      setCreatedGameId(data.id);
    } catch (error) {
      console.error('Error creating game:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 pb-24">
      <div className="flex justify-end mb-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-indigo-600 hover:text-indigo-800"
        >
          <Home className="w-5 h-5" />
          Home
        </Link>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Create Your Slot Machine</h1>

      {/* Stepper */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
        {['Name','Template','Configure','Preview'].map((label, idx) => (
          <div key={idx} className="flex items-center">
            <div className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${step === idx ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'}`}>{label}</div>
            {idx < 3 && <div className="w-4 sm:w-8 h-px bg-indigo-200 mx-1 sm:mx-2" />}
          </div>
        ))}
      </div>

      {/* Steps */}
      {step === 0 && (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Game Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="e.g., Classroom Rewards Slot"
          />
          <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
            <p className="text-sm text-gray-700">Tip: Choose a clear name so it’s easy to find and share.</p>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2"><Layers className="w-5 h-5" /> Pick a Template</h2>
            <button
              type="button"
              className="text-indigo-600 text-sm hover:text-indigo-800"
              onClick={() => { setSlots([['🎉'],['🎈'],['🎨']]); setSelectedTemplateId(null); }}
            >Reset to default</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {/* Manual input card */}
            <button
              type="button"
              onClick={() => {
                setSelectedTemplateId('custom');
                // For custom start, initialize with three empty slots (no prefill)
                setSlots([[], [], []]);
              }}
              className={`text-left bg-white border rounded-lg p-3 hover:shadow-md transition-shadow ${selectedTemplateId === 'custom' ? 'border-indigo-500 ring-2 ring-indigo-300' : 'border-indigo-100'}`}
            >
              <div className="font-semibold text-sm sm:text-base mb-2 text-gray-800 flex items-center gap-2">
                <Edit3 className="w-4 h-4" /> Start from scratch
              </div>
              <p className="text-xs text-gray-600">Hand-enter slot values without choosing a template.</p>
            </button>

            {TEMPLATES.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => { setSlots(t.slots); setSelectedTemplateId(t.id); }}
                className={`text-left bg-white border rounded-lg p-3 hover:shadow-md transition-shadow ${selectedTemplateId === t.id ? 'border-indigo-500 ring-2 ring-indigo-300' : 'border-indigo-100'}`}
              >
                <div className="font-semibold text-sm sm:text-base mb-2 text-gray-800">{t.name}</div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-md p-2">
                  <SlotMachine slots={t.slots} isPreview={true} />
                </div>
              </button>
            ))}
          </div>

          {/* No inline manual input on template step; proceed to Configure step for editing */}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-xl font-semibold">Slot Configuration</h2>
            <button
              type="button"
              onClick={addSlot}
              disabled={slots.length >= 5}
              className="text-indigo-600 hover:text-indigo-800 disabled:opacity-50"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {selectedTemplateId === 'custom' && (
            <div className="rounded-xl border border-dashed border-indigo-200 bg-indigo-50 p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-gray-700">
                Tip: Separate values with commas, e.g., "{PLACEHOLDERS[0]}". Each slot must have at least one value before you can preview and save.
              </p>
            </div>
          )}

          {slots.map((slot, index) => (
            <div key={index} className="flex gap-2 items-start">
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Slot {index + 1} Values (comma-separated)
                </label>
                <input
                  type="text"
                  value={slot.join(', ')}
                  onChange={(e) => updateSlotValues(index, e.target.value)}
                  placeholder={PLACEHOLDERS[index] || PLACEHOLDERS[0]}
                  className={`w-full px-3 py-2 border rounded-md ${selectedTemplateId === 'custom' && slot.length === 0 ? 'border-indigo-300 bg-indigo-50' : 'border-gray-300'}`}
                />
                {selectedTemplateId === 'custom' && (
                  <div className="mt-1 text-xs text-gray-500 flex items-center gap-2">
                    <span>Example:</span>
                    <button
                      type="button"
                      onClick={() => updateSlotValues(index, PLACEHOLDERS[index] || PLACEHOLDERS[0])}
                      className="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                    >
                      Fill with example {PLACEHOLDERS[index] || PLACEHOLDERS[0]}
                    </button>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => removeSlot(index)}
                disabled={slots.length <= 1}
                className="mt-8 text-red-600 hover:text-red-800 disabled:opacity-50"
              >
                <Minus className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {step === 3 && (
        <div className="border-t border-b py-6 my-6">
          <h3 className="text-lg font-semibold mb-4 text-center">Preview</h3>
          <SlotMachine
            slots={slots}
            isSpinning={isSpinning}
            onSpin={() => {
              setIsSpinning(true);
              setTimeout(() => setIsSpinning(false), 2000);
            }}
          />
        </div>
      )}

      {/* Persistent bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-t">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep(prev => Math.max(0, prev - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>
          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(prev => Math.min(3, prev + 1))}
              disabled={!canGoNext}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleSubmit()}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              <Save className="w-5 h-5" />
              {isSubmitting ? 'Saving...' : 'Save Game'}
            </button>
          )}
        </div>
      </div>

      {createdGameId && (
        <ShareModal
          gameId={createdGameId}
          onClose={() => setCreatedGameId(null)}
        />
      )}
    </div>
  );
};