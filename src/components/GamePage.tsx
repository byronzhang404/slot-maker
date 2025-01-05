import React from 'react';
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner message="Loading game..." />
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <SEO 
        title={`${game.name} - Free Online Slot Machine Game`}
        description={`Play ${game.name}, a custom slot machine game. Create your own slots, share with friends, and embed on any website.`}
      />
      <div className="max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">{game.name}</h1>
        <SlotMachine slots={game.slots} />
      </div>
    </div>
  );
};