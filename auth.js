import { SupabaseAdapter } from "@auth/supabase-adapter";
import jwt from "jsonwebtoken";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

/* it picks up the credential ID and secret from env automatically */
export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [GitHub],
	callbacks: {
		/*
      windows to the auth process flow or something like interceptors, each step controlled by a cb.
      allows access control without a db or integrating external db or APIs
      the flow:
    [account] -> jwt() -> session()
      jwt
      session (client)
      signIn 
      authorized
      redirect 
    */
		authorized: async ({ auth }) => {
			// Logged in users are authenticated, otherwise redirect to login page (default)
			// console.log(auth);

			return auth?.user?.email === process.env.ADMIN_EMAIL;
		},

		async jwt({ token, account, user }) {
			// account only exists on first sign-in
			/* that's why we use it as a condition what is to be done on first sign-in */
			if (account) {
				// why the step below?
				/* supabase want their own jwt token with a certain shape, they won't use the NEXTAuth one */

				token.userId = process.env.MY_SUPABASE_USER_ID;

				const supabaseToken = jwt.sign(
					{
						sub: process.env.MY_SUPABASE_USER_ID,
						email: token.email,
						role: "authenticated",
					},
					process.env.SUPABASE_JWT_SECRET,
					{ expiresIn: "1h", algorithm: "HS256" },
				);
				token.supabaseAccessToken = supabaseToken;
			}

			return token;
		},

		async session({ session, token }) {
			session.supabaseAccessToken = token?.supabaseAccessToken ?? null;
			session.user.id = token?.userId;
			// console.log(session);
			return session;
		},
	},
	pages: {
		// override the default login redirect to a custom page
		signIn: "/login",
	},
	adapter: SupabaseAdapter({
		url: process.env.NEXT_PUBLIC_SUPABASE_URL,
		secret: process.env.SUPABASE_SECRET_KEY,
	}),
	// adapter default to database strategy that's why we needed to enforce jwt strategy
	session: {
		/* "jwt" strategy -> jwt() cb => token stored in cookie => session() reads from token*/
		/* "database" strategy -> session stored in DB => session() reads from DB record*/
		strategy: "jwt",
	},
});
