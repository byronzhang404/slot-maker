import React, { useState } from 'react';
import { Dices } from 'lucide-react';

export const SlotMachine: React.FC<{
  slots: string[][];
  onSpin?: () => void;
  isSpinning?: boolean;
  isPreview?: boolean;
}> = ({ slots, onSpin, isSpinning = false, isPreview = false }) => {
  const [currentValues, setCurrentValues] = useState<string[]>(
    slots.map(reel => reel[0])
  );

  const spin = () => {
    if (onSpin) onSpin();
    
    let spinsLeft = 20;
    const interval = setInterval(() => {
      setCurrentValues(slots.map(reel => 
        reel[Math.floor(Math.random() * reel.length)]
      ));
      
      spinsLeft--;
      if (spinsLeft <= 0) {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <div className={`w-full ${isPreview ? 'max-w-sm' : 'max-w-2xl'} mx-auto`}>
      <div className="flex flex-col gap-4 mb-6">
        {currentValues.map((value, index) => (
          <div
            key={index}
            className={`w-full ${isPreview ? 'h-12' : 'h-20'} bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center ${isPreview ? 'text-xl' : 'text-3xl'} font-bold border-2 border-indigo-200 shadow-sm hover:shadow-md transition-shadow`}
          >
            {value}
          </div>
        ))}
      </div>
      {!isPreview && (
        <button
          onClick={spin}
          disabled={isSpinning}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl flex items-center justify-center gap-3 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          <Dices className="w-6 h-6" />
          Spin the Slots!
        </button>
      )}
    </div>
  );
};