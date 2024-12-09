import { NextResponse } from "next/server";

export default function middleware(request) {
	//mathod 1
	console.log("I am inside middleware");
	if (request.url.includes("dashbord")) {
		return NextResponse.redirect(new URL("/Api/comments", request.url));
	}

	//mathod 2 part 1

	//return NextResponse.redirect(new URL("/", request.url));

	return NextResponse.next();
}

//mathod 2 part 2

// export const config = {
// 	matcher: "/dTwo",
// };
