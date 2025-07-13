import { createClient } from '@supabase/supabase-js'

// These environment variables will need to be set in .env.local or .env
// For development, we're using placeholder values to prevent errors
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ntzeinyrrtogekvpukqp.supabase.co'

// Use the actual anon key from the .env file or fall back to a placeholder
// The placeholder key is not valid and will not connect to the real database
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder-key'

// Create a single supabase client for the entire app
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Flag to check if we're using real credentials or placeholders
export const hasRealCredentials = 
  process.env.NEXT_PUBLIC_SUPABASE_URL && 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY && 
  !supabaseAnonKey.includes('placeholder')

// Enhanced logging for credential detection and debugging
if (typeof window !== 'undefined') {
  console.log('🔍=== SUPABASE CREDENTIAL DEBUG ===');
  console.log('🌐 NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT SET');
  console.log('🔐 NEXT_PUBLIC_SUPABASE_ANON_KEY exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  console.log('🔐 Key contains placeholder:', supabaseAnonKey.includes('placeholder'));
  console.log('🔑 hasRealCredentials:', hasRealCredentials);
  console.log('📝 Supabase URL being used:', supabaseUrl);
  console.log('📝 Anon key preview:', supabaseAnonKey.substring(0, 20) + '...');
  console.log(`🚀 Using ${hasRealCredentials ? 'REAL' : 'FALLBACK'} Supabase credentials`);
  console.log('🔍=== END CREDENTIAL DEBUG ===');
}

// DineUp project ID: ntzeinyrrtogekvpukqp
