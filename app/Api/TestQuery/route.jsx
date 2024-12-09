import { headers } from "next/headers";
export async function GET(request) {
	const requestHeader = new Headers(request.headers);
	console.log(requestHeader);

	//shortest mathod for getting header
	const anotherHeather = headers();
	console.log(anotherHeather.get("user-agent"));
	return new Response("Test Query");
}
