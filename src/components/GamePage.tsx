import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlotMachine } from './SlotMachine';
import { useGame } from '../hooks/useGame';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { SEO } from './SEO';
import { Home } from 'lucide-react';

export const GamePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { game, loading, error, retryLoading } = useGame(id);

  useEffect(() => {
    // Load Adsterra script for game detail page
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//notorietyinflected.com/0b09c070b271987dd52a22bb8744c628/invoke.js';
    document.head.appendChild(script);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <LoadingSpinner message="Loading game..." />
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="text-center">
          <ErrorMessage 
            message={error || 'Game not found'} 
            onRetry={retryLoading} 
          />
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <SEO 
        title={`${game.name} - Free Online Slot Machine Game`}
        description={`Play ${game.name}, a custom slot machine game. Create your own slots, share with friends, and embed on any website.`}
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{game.name}</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-indigo-600 hover:text-indigo-800"
          >
            <Home className="w-5 h-5" />
            Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <SlotMachine slots={game.slots} />
        </div>

        {/* Adsterra Ad Container */}
        <div   id="container-0b09c070b271987dd52a22bb8744c628"  />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {game.slots.map((slot, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Slot {index + 1}
              </h3>
              <div className="flex flex-wrap gap-2">
                {slot.map((value, valueIndex) => (
                  <span
                    key={valueIndex}
                    className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};