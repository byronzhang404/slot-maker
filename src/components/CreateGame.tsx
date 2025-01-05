import React, { useState } from 'react';
import { Plus, Minus, Save } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { SlotMachine } from './SlotMachine';
import { getClientIP } from '../lib/utils';
import { ShareModal } from './ShareModal';

export const CreateGame: React.FC = () => {
  const [name, setName] = useState('');
  const [slots, setSlots] = useState<string[][]>([['🎉'], ['🎈'], ['🎨']]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdGameId, setCreatedGameId] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Your Slot Machine</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Game Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Slot Configuration</h2>
            <button
              type="button"
              onClick={addSlot}
              disabled={slots.length >= 5}
              className="text-indigo-600 hover:text-indigo-800 disabled:opacity-50"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {slots.map((slot, index) => (
            <div key={index} className="flex gap-2 items-start">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slot {index + 1} Values (comma-separated)
                </label>
                <input
                  type="text"
                  value={slot.join(', ')}
                  onChange={(e) => updateSlotValues(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:opacity-50"
        >
          <Save className="w-5 h-5" />
          {isSubmitting ? 'Saving...' : 'Save Game'}
        </button>
      </form>

      {createdGameId && (
        <ShareModal
          gameId={createdGameId}
          onClose={() => setCreatedGameId(null)}
        />
      )}
    </div>
  );
};