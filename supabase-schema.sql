-- Run this in Supabase SQL Editor to create the table
-- Go to: https://supabase.com/dashboard > Your Project > SQL Editor

CREATE TABLE IF NOT EXISTS study_data (
  id TEXT PRIMARY KEY DEFAULT 'main',
  discipline_hours JSONB DEFAULT '{}',
  questions_resolved INTEGER DEFAULT 0,
  flashcards_created INTEGER DEFAULT 0,
  simulados JSONB DEFAULT '[]',
  legislation_progress JSONB DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (but allow all operations for simplicity)
ALTER TABLE study_data ENABLE ROW LEVEL SECURITY;

-- Policy: allow all operations (single-user app)
CREATE POLICY "Allow all operations" ON study_data
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Insert initial row
INSERT INTO study_data (id) VALUES ('main') ON CONFLICT (id) DO NOTHING;
