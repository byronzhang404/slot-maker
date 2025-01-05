import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { SlotGame } from '../types';

export const FeaturedGames: React.FC = () => {
  const [games, setGames] = useState<SlotGame[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const { data } = await supabase
          .from('slot_games')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5);
        
        if (data) {
          setGames(data);
        }
      } catch (error) {
        console.error('Error loading featured games:', error);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  if (loading) {
    return <div className="text-center">Loading featured games...</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {games.map((game) => (
        <Link
          key={game.id}
          to={`/game/${game.id}`}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-3">{game.name}</h3>
          <p className="text-gray-600 mb-4">
            A custom slot machine game with unique combinations.
          </p>
          <span className="text-indigo-600 hover:text-indigo-800">Try it now →</span>
        </Link>
      ))}
    </div>
  );
};