import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || '';
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
  '';

/**
 * Memeriksa apakah kredensial publik Supabase sudah dikonfigurasi dengan benar.
 */
export function isSupabaseConfigured(): boolean {
  if (!supabaseUrl || !supabasePublishableKey) {
    return false;
  }

  try {
    const parsed = new URL(supabaseUrl);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

let cachedClient: SupabaseClient | null = null;

/**
 * Mengembalikan instance SupabaseClient jika environment variables sudah diisi.
 * Mengembalikan `null` jika Supabase belum dikonfigurasi sehingga aplikasi
 * dapat beralih secara aman ke data dummy lokal (`src/data/destinations.ts`).
 */
export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null;
  }

  if (!cachedClient) {
    cachedClient = createClient(supabaseUrl, supabasePublishableKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return cachedClient;
}
