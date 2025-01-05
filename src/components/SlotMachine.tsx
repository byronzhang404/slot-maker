import React, { useState } from 'react';
import { Dices } from 'lucide-react';

export const SlotMachine: React.FC<{
  slots: string[][];
  onSpin?: () => void;
  isSpinning?: boolean;
}> = ({ slots, onSpin, isSpinning = false }) => {
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
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-center gap-4 mb-6">
        {currentValues.map((value, index) => (
          <div
            key={index}
            className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold border-4 border-gray-300"
          >
            {value}
          </div>
        ))}
      </div>
      <button
        onClick={spin}
        disabled={isSpinning}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:opacity-50"
      >
        <Dices className="w-5 h-5" />
        Spin!
      </button>
    </div>
  );
};