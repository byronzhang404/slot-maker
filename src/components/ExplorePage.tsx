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

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-12">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-3 sm:mb-6">
            Explore All Slot Machines
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-8 px-4">
            Discover amazing slot machines created by our community
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto min-w-[200px]"
            >
              <RefreshCw className={`w-4 h-4 sm:w-5 sm:h-5 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">{loading ? 'Refreshing...' : 'Refresh Games'}</span>
              <span className="sm:hidden">{loading ? 'Loading...' : 'Refresh'}</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-indigo-50 transition-all border-2 border-indigo-600 w-full sm:w-auto min-w-[200px]"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
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
          <div className="mb-4 sm:mb-8 text-xs sm:text-sm text-gray-600 text-center px-2">
            Showing {games.length} random games
          </div>
        )}
        
        {!loading && !error && games.length > 0 && (
          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {games.map(game => {
              // Safely get slot values with fallback
              const safeSlots = (game.slots || []).map(slot => Array.isArray(slot) ? slot : []);
              return (
              <div 
                key={game.id} 
                onClick={() => navigate(`/game/${game.id}`)}
                className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 active:scale-95 overflow-hidden"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-center text-gray-800 truncate px-2">
                  {game.name}
                </h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {safeSlots.slice(0, 3).map((slot, index) => (
                    <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-md sm:rounded-lg border border-indigo-100 p-2 sm:p-3">
                      <div className="flex flex-wrap gap-1 sm:gap-2 items-center justify-center min-w-0">
                        {slot.slice(0, 2).map((value, valueIndex) => (
                          <span key={valueIndex} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white rounded text-xs sm:text-sm truncate max-w-[calc(50%-4px)] inline-block">
                            {value}
                          </span>
                        ))}
                        {slot.length > 2 && (
                          <span className="text-xs sm:text-sm text-gray-500 px-2">+{slot.length - 2}</span>
                        )}
                      </div>
                    </div>
                  ))}
                  {safeSlots.length > 3 && (
                    <div className="text-center text-xs sm:text-sm text-gray-500 pt-1 sm:pt-2 break-words">
                      +{safeSlots.length - 3} more slots
                    </div>
                  )}
                </div>
                <button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:opacity-90 transition-all">
                  Play Now
                </button>
              </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
