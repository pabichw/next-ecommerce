import { type NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): Response {
	console.log(request);

	return NextResponse.json({ message: "Marco Polo" });
}
