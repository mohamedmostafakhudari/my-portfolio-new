import { createClient } from "@supabase/supabase-js";

/**
 * This key has the ability to bypass Row Level Security. Never share it publicly.
 */
export const supabaseAdmin = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.SUPABASE_SECRET_KEY,
);
