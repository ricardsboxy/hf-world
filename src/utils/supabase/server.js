import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Use environment variables for security


export function createClient() {

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  console.log(supabaseUrl)
  console.log(supabaseServiceRoleKey)
  
  return createSupabaseClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
    },
  });
}

