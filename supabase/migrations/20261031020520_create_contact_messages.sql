/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, required)
  - `email` (text, required)
  - `phone` (text, optional)
  - `subject` (text, required; one of Duda, Sugerencia, Reclamo)
  - `message` (text, required)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Enables row level security on `contact_messages`.
- The public website (no sign-in) may only INSERT new messages. It cannot read, edit or delete any message.
- Only the INSERT privilege is granted to the anon and authenticated roles.

3. Notes
- Length limits are enforced in the database so oversized submissions are rejected.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 200),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 40),
  subject text NOT NULL CHECK (subject IN ('Duda', 'Sugerencia', 'Reclamo')),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
