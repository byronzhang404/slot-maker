import { supabase } from './supabase';
import type { SlotGame } from '../types';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

async function retry<T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return retry(operation, retries - 1);
    }
    throw error;
  }
}

export async function fetchGames() {
  return retry(async () => {
    const { data, error } = await supabase
      .from('slot_games')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as SlotGame[];
  });
}

export async function fetchGame(id: string) {
  return retry(async () => {
    const { data, error } = await supabase
      .from('slot_games')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data as SlotGame;
  });
}

export async function createGame(game: Omit<SlotGame, 'id' | 'created_at'>) {
  return retry(async () => {
    const { data, error } = await supabase
      .from('slot_games')
      .insert([game])
      .select('id')
      .single();

    if (error) throw error;
    return data;
  });
}