export { auth as proxy } from "@/auth";

export const config = {
	matcher: [
		/* specify paths where the proxy applies */
		"/admin/:path*",
	],
};
