import { auth } from "@/auth";
import { createBrowserClient } from "@supabase/ssr";

export async function createClient() {
	const session = await auth();
	const supabaseAccessToken = session?.supabaseAccessToken ?? null;
	// Create a supabase client on the browser with project's credentials
	return createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
		{
			global: {
				headers: {
					...(superbaseAccessToken && {
						Authorization: `Bearer ${supabaseAccessToken}`,
					}),
				},
			},
		},
	);
}
