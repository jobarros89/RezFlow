import { supabase, isSupabaseConfigured } from '@/lib/supabase';

const ensureConfig = () => { if (!isSupabaseConfigured) throw new Error('Configure as variáveis públicas do Supabase.'); };
export const authService = {
  async signIn(email: string, password: string) { ensureConfig(); const { error } = await supabase.auth.signInWithPassword({ email, password }); if (error) throw error; },
  async signUp(fullName: string, email: string, password: string) { ensureConfig(); const { error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: fullName } } }); if (error) throw error; },
  async resetPassword(email: string) { ensureConfig(); const { error } = await supabase.auth.resetPasswordForEmail(email); if (error) throw error; },
  async signOut() { const { error } = await supabase.auth.signOut(); if (error) throw error; },
};
