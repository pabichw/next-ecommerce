import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
 
export async function POST(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();
	
	if (
		typeof body === "object" &&
		body &&
		"productId" in body &&
		typeof body.productId === "string"
	) {
		console.log(`Revalidating /product/${body.productId}`);
		revalidatePath(`/product/${body.productId}`);
		console.log(`Revalidating /products`);
		revalidateTag(`products`);
		return new NextResponse(null, { status: 200 });
	} else {
		return new NextResponse(null, { status: 400 });
	}
}