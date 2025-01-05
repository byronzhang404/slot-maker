import { useState, useEffect } from 'react';
import { supabase, handleSupabaseError } from '../lib/supabase';
import { SlotGame } from '../types';
import { getCategoryForGame } from '../lib/categories';

export const useGamesInCategory = (category?: string) => {
  const [games, setGames] = useState<SlotGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadGames = async () => {
      if (!category) {
        setError('Invalid category');
        setLoading(false);
        return;
      }

      try {
        const { data, error: dbError } = await supabase
          .from('slot_games')
          .select('*')
          .order('created_at', { ascending: false });

        if (dbError) throw dbError;
        
        if (!isMounted) return;

        const filteredGames = (data || []).filter(game => 
          getCategoryForGame(game.name) === category.toLowerCase()
        );

        setGames(filteredGames);
        setError(null);
      } catch (err) {
        if (!isMounted) return;
        setError(handleSupabaseError(err));
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadGames();

    return () => {
      isMounted = false;
    };
  }, [category]);

  return { games, loading, error };
};