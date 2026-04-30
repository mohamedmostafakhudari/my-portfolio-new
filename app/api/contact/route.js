export async function POST(request) {
	console.log(request);
	// const res = await request.json();
	return Response.json({ message: "ok" });
}
