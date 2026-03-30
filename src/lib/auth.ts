import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;

export function getAuthClient(): SupabaseClient {
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

export async function signIn(email: string, password: string) {
  const { data, error } = await getAuthClient().auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await getAuthClient().auth.signOut();
  if (error) throw error;
}

export async function getSession() {
  const { data } = await getAuthClient().auth.getSession();
  return data.session;
}
