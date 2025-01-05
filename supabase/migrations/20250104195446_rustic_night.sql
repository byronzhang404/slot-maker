/*
  # Add sample slot games

  1. New Data
    - Adds sample slot games for popular categories
    - Includes games for FPE, Dandy's World, BFDI, and Genshin Impact themes
  2. Changes
    - Inserts sample data into slot_games table
*/

INSERT INTO slot_games (name, slots, is_locked, creator_ip) VALUES
  (
    'FPE Classic Slot Maker',
    '[["🎮","🎲","🎯"],["🎨","🎭","🎪"],["🎸","🎺","🎻"]]'::jsonb,
    true,
    '127.0.0.1'
  ),
  (
    'Dandy''s World Adventure Slots',
    '[["🦁","🐯","🐻"],["🦊","🐨","🐼"],["🐸","🦜","🦋"]]'::jsonb,
    true,
    '127.0.0.1'
  ),
  (
    'BFDI Random Character Picker',
    '[["🌟","💫","⭐"],["🎈","🎀","🎁"],["🌈","☁️","🌙"]]'::jsonb,
    true,
    '127.0.0.1'
  ),
  (
    'Genshin Impact Wish Simulator',
    '[["⚔️","🛡️","🏹"],["📜","💎","✨"],["🌟","🔮","💫"]]'::jsonb,
    true,
    '127.0.0.1'
  ),
  (
    'Sprunki''s Random Generator',
    '[["🎲","🎮","🎯"],["🎨","🎭","🎪"],["🎸","🎺","🎻"]]'::jsonb,
    true,
    '127.0.0.1'
  );