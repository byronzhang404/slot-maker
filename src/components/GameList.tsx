import React, { useEffect, useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { SlotGame } from '../types';
import { SlotMachine } from './SlotMachine';
import { fetchGames } from '../lib/api';

export const GameList: React.FC = () => {
  const [games, setGames] = useState<SlotGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [spinningGames, setSpinningGames] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
        setError('Failed to load games. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  const handleSpin = (gameId: string) => {
    setSpinningGames(new Set([...spinningGames, gameId]));
    setTimeout(() => {
      setSpinningGames(prev => {
        const next = new Set(prev);
        next.delete(gameId);
        return next;
      });
    }, 2000);
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid gap-8 md:grid-cols-2">
        {games.map(game => (
          <div key={game.id} className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">{game.name}</h2>
            <SlotMachine
              slots={game.slots}
              isSpinning={spinningGames.has(game.id)}
              onSpin={() => handleSpin(game.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};