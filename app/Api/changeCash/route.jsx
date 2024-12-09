export const dynamic = "force-dynamic";

export async function GET(request) {
	const getHeader = new Headers(request.headers);
	const newcookie = request.cookies.get("theme");
	console.log(newcookie);

	return new Response("Save cookie", {
		headers: {
			"Set-Cookie": "theme=jeem",
		},
	});
}
