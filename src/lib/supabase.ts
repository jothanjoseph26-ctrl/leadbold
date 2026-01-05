import { createClient } from '@supabase/supabase-js';

// Institutional Credentials for LeadBold Platform
const supabaseUrl = process.env.SUPABASE_URL || "https://ytdmrrnpeebpaftcbfte.supabase.co";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0ZG1ycm5wZWVicGFmdGNiZnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1MTg1OTQsImV4cCI6MjA4MzA5NDU5NH0.FSZXUTRMpOfW3GGJ9LJ-E9_ipcJjcBwKf-ZPBI1lABk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Institutional Data Table Mapping:
 * - courses: { id, payload: JSONB }
 * - summits: { id, payload: JSONB }
 * - personnel: { id, payload: JSONB }
 * - insights: { id, payload: JSONB }
 */