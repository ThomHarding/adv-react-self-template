import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL =
  'https://tfsniozmyuuijscfdqre.supabase.co';
const SUPABASE_KEY =
  // eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmc25pb3pteXV1aWpzY2ZkcXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5OTMzNTYsImV4cCI6MTk2MzU2OTM1Nn0.o5Vjx7n791rkZxuhmxHUoti3dkFusShLHfaXhGvGNHg';

export const client = createClient(SUPABASE_URL, SUPABASE_KEY);
