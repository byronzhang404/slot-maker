import { useState, useEffect } from 'react';
import { supabase, ensureInitialized } from '../lib/supabase-client';
import type { SlotGame } from '../types';

export const useGame = (id?: string) => {
  const [game, setGame] = useState<SlotGame | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('Invalid game ID');
      setLoading(false);
      return;
    }

    let isMounted = true;

    const loadGame = async () => {
      try {
        await ensureInitialized();
        
        const { data, error: dbError } = await supabase
          .from('slot_games')
          .select('*')
          .eq('id', id)
          .single();

        if (dbError) throw dbError;
        if (!isMounted) return;

        setGame(data);
        setError(null);
      } catch (err) {
        if (!isMounted) return;
        setError('Failed to load game. Please try again.');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadGame();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const retryLoading = () => {
    setLoading(true);
    setError(null);
  };

  return { game, loading, error, retryLoading };
};