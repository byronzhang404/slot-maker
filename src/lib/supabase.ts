import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Add error handling helper
export const handleSupabaseError = (error: any): string => {
  console.error('Supabase error:', error);
  
  if (error?.message?.includes('Failed to fetch')) {
    return 'Unable to connect to the database. Please check your internet connection.';
  }
  
  return 'An error occurred. Please try again later.';
};