import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key || url === "placeholder") {
      throw new Error("Supabase not configured");
    }
    _supabase = createClient(url, key);
  }
  return _supabase;
}

// Types
export interface StudyData {
  id?: string;
  discipline_hours: Record<string, number>;
  questions_resolved: number;
  flashcards_created: number;
  simulados: Simulado[];
  legislation_progress: Record<string, number>;
  updated_at?: string;
}

export interface Simulado {
  name: string;
  score: number;
  date: string;
}

const DATA_KEY = "main";

export async function loadData(): Promise<StudyData | null> {
  const { data, error } = await getSupabase()
    .from("study_data")
    .select("*")
    .eq("id", DATA_KEY)
    .single();

  if (error || !data) return null;
  return {
    id: data.id,
    discipline_hours: data.discipline_hours || {},
    questions_resolved: data.questions_resolved || 0,
    flashcards_created: data.flashcards_created || 0,
    simulados: data.simulados || [],
    legislation_progress: data.legislation_progress || {},
    updated_at: data.updated_at,
  };
}

export async function saveData(studyData: StudyData): Promise<void> {
  const { error } = await getSupabase()
    .from("study_data")
    .upsert({
      id: DATA_KEY,
      discipline_hours: studyData.discipline_hours,
      questions_resolved: studyData.questions_resolved,
      flashcards_created: studyData.flashcards_created,
      simulados: studyData.simulados,
      legislation_progress: studyData.legislation_progress,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    console.error("Supabase save error:", error);
    throw error;
  }
}
