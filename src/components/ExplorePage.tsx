import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RefreshCw, Home } from 'lucide-react';
import { SlotGame } from '../types';
import { supabase } from '../lib/supabase';
import { SEO } from './SEO';

const GAMES_PER_PAGE = 50;

export const ExplorePage: React.FC = () => {
  const [games, setGames] = useState<SlotGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchRandomGames = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // First, get the total count
      const { count } = await supabase
        .from('slot_games')
        .select('*', { count: 'exact', head: true });

      if (!count || count === 0) {
        setGames([]);
        setLoading(false);
        return;
      }

      // Generate a random offset
      const randomOffset = Math.floor(Math.random() * Math.max(0, count - GAMES_PER_PAGE));
      
      // Fetch random games using random offset
      const { data, error: fetchError } = await supabase
        .from('slot_games')
        .select('*')
        .order('created_at', { ascending: false })
        .range(randomOffset, randomOffset + GAMES_PER_PAGE - 1);

      if (fetchError) throw fetchError;
      
      // Remove duplicates by id
      const uniqueGames = (data || []).filter((game, index, self) =>
        index === self.findIndex((g) => g.id === game.id)
      );
      
      setGames(uniqueGames);
    } catch (err) {
      console.error('Error fetching games:', err);
      setError('Failed to load games. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomGames();
  }, []);

  const handleRefresh = () => {
    fetchRandomGames();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <SEO 
        title="Explore All Slot Machines - Discover Amazing Games"
        description="Explore our collection of custom slot machine games. Discover amazing games created by our community and spin the wheel!"
        canonicalPath="/explore"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Explore All Slot Machines
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Discover amazing slot machines created by our community
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Refreshing...' : 'Refresh Games'}
            </button>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-all border-2 border-indigo-600"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">Loading games...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg mb-4">{error}</p>
            <button
              onClick={handleRefresh}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && games.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg mb-4">No games found.</p>
            <button
              onClick={() => navigate('/create')}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all"
            >
              Create Your First Game
            </button>
          </div>
        )}

        {/* Games Grid */}
        {!loading && !error && games.length > 0 && (
          <div className="mb-8 text-sm text-gray-600 text-center">
            Showing {games.length} random games
          </div>
        )}
        
        {!loading && !error && games.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {games.map(game => (
              <div 
                key={game.id} 
                onClick={() => navigate(`/game/${game.id}`)}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800 truncate">
                  {game.name}
                </h3>
                <div className="space-y-2">
                  {game.slots.slice(0, 3).map((slot, index) => (
                    <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100 p-3">
                      <div className="flex flex-wrap gap-2 items-center justify-center">
                        {slot.slice(0, 3).map((value, valueIndex) => (
                          <span key={valueIndex} className="px-2 py-1 bg-white rounded-md text-sm">
                            {value}
                          </span>
                        ))}
                        {slot.length > 3 && (
                          <span className="text-xs text-gray-500">+{slot.length - 3}</span>
                        )}
                      </div>
                    </div>
                  ))}
                  {game.slots.length > 3 && (
                    <div className="text-center text-sm text-gray-500 pt-2">
                      +{game.slots.length - 3} more slots
                    </div>
                  )}
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:opacity-90 transition-all">
                  Play Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
