/*
  # Create Slot Games Schema

  1. New Tables
    - `slot_games`
      - `id` (uuid, primary key)
      - `name` (text) - Game name
      - `created_at` (timestamp)
      - `slots` (jsonb) - Array of slot configurations
      - `is_locked` (boolean) - Whether game settings are locked
      - `creator_ip` (text) - IP address of creator for basic identification

  2. Security
    - Enable RLS on `slot_games` table
    - Add policies for reading and creating games
*/

CREATE TABLE IF NOT EXISTS slot_games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  slots jsonb NOT NULL,
  is_locked boolean DEFAULT false,
  creator_ip text NOT NULL
);

ALTER TABLE slot_games ENABLE ROW LEVEL SECURITY;

-- Anyone can read slot games
CREATE POLICY "Anyone can read slot games"
  ON slot_games
  FOR SELECT
  TO public
  USING (true);

-- Anyone can create slot games
CREATE POLICY "Anyone can create slot games"
  ON slot_games
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only creator can update their own games
CREATE POLICY "Creators can update their own games"
  ON slot_games
  FOR UPDATE
  TO public
  USING (creator_ip = current_setting('request.headers')::json->>'x-real-ip')
  WITH CHECK (
    creator_ip = current_setting('request.headers')::json->>'x-real-ip'
    AND NOT is_locked -- Cannot update if game is locked
  );