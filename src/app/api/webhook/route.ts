import { type NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): Response {
	return NextResponse.json({ message: "Marco Polo" });
}
