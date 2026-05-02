import { auth } from "@/auth";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
	/* the line below was causing problem with SSG components
	request-time functions can't be called from build-time functions
	example: generateStaticParams don't know cookies or auth
	*/
	// const cookieStore = await cookies();
	const session = await auth();
	// console.log("FUll session:", JSON.stringify(session, null, 2));
	// console.log("Token: ", session?.supabaseAccessToken);
	const supabaseAccessToken = session?.supabaseAccessToken ?? null;
	// console.log("Sending to Supabase:", supabaseAccessToken);

	// Create a server's supabase client with newly configured cookie,
	// which could be used to maintain user's session
	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
		{
			global: {
				headers: {
					...(supabaseAccessToken && {
						Authorization: `Bearer ${supabaseAccessToken}`,
					}),
				},
			},
			cookies: {
				async getAll() {
					const cookieStore = await cookies(); // make it lazy, only runs when called
					return cookieStore.getAll();
				},
				async setAll(cookiesToSet, _headers) {
					try {
						const cookieStore = await cookies(); // make it lazy, only runs when called

						cookiesToSet.forEach(({ name, value, options }) =>
							cookieStore.set(name, value, options),
						);
					} catch {
						// The `setAll` method was called from a Server Component.
						// This can be ignored if you have proxy refreshing
						// user sessions.
					}
				},
			},
		},
	);
}
