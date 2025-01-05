// Utility functions for game categorization
export const getCategoryForGame = (name: string): string => {
  const firstChar = name.trim().charAt(0).toLowerCase();
  return /[a-z]/.test(firstChar) ? firstChar : 'other';
};

export const CATEGORIES = [
  ...'abcdefghijklmnopqrstuvwxyz'.split(''),
  'other'
] as const;

export type Category = typeof CATEGORIES[number];