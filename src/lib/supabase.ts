import { getAuthClient } from "./auth";

// Types
export interface QuestionEntry {
  date: string; // ISO date
  discipline: string;
  total: number;
  correct: number;
}

export interface StudyData {
  id?: string;
  discipline_hours: Record<string, number>;
  // weekly_hours: { [weekKey: string]: { [discipline: string]: number } }
  weekly_hours: Record<string, Record<string, number>>;
  questions_resolved: number;
  question_entries: QuestionEntry[];
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
  const { data, error } = await getAuthClient()
    .from("study_data")
    .select("*")
    .eq("id", DATA_KEY)
    .single();

  if (error || !data) return null;
  return {
    id: data.id,
    discipline_hours: data.discipline_hours || {},
    weekly_hours: data.weekly_hours || {},
    questions_resolved: data.questions_resolved || 0,
    question_entries: data.question_entries || [],
    simulados: data.simulados || [],
    legislation_progress: data.legislation_progress || {},
    updated_at: data.updated_at,
  };
}

export async function saveData(studyData: StudyData): Promise<void> {
  const { error } = await getAuthClient()
    .from("study_data")
    .upsert({
      id: DATA_KEY,
      discipline_hours: studyData.discipline_hours,
      weekly_hours: studyData.weekly_hours,
      questions_resolved: studyData.questions_resolved,
      question_entries: studyData.question_entries,
      simulados: studyData.simulados,
      legislation_progress: studyData.legislation_progress,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    console.error("Supabase save error:", error);
    throw error;
  }
}
