import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import {
	AddToCartDocument,
	GetOrCreateCartDocument,
	Order,
	OrderItem,
	UpdateOrderItemQtyDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils/gql";

export async function getOrCreateCart(): Promise<Order | null> {
	let cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		cartId = ""; // kurwa mac
	}

	const responseData = await executeGraphql(
		GetOrCreateCartDocument,
		{ id: cartId },
		{ tags: ["cart"] },
	);

	if (!responseData?.cart) {
		return null;
	}

	cookies().set("cartId", String(responseData.cart?.id), {
		httpOnly: true,
		secure: true,
	});

	cookies().set("cart", JSON.stringify(responseData.cart), {
		httpOnly: true,
		secure: true,
	});

	return responseData.cart as Order;
}

export function getCartFromCookies(): Order | null {
	const cartString = cookies().get("cart")?.value;

	if (!cartString) {
		return null;
	}

	return JSON.parse(cartString) as Order;
}

export async function addToCart(
	cartId: string,
	productId: string,
	quantity: number,
	configurableAttributes?: string,
): Promise<Order | null> {
	const response = await executeGraphql(AddToCartDocument, {
		id: cartId,
		productId,
		quantity,
		configurableAttributes,
	});

	if (!response) {
		return null;
	}

	cookies().set("cart", JSON.stringify(response.addToCart));

	revalidateTag("cart");

	return response as Order;
}

export async function changeItemQty(
	orderId: string,
	orderItemId: string,
	quantity: number,
): Promise<OrderItem | null> {
	const response = await executeGraphql(
		UpdateOrderItemQtyDocument,
		{ orderId, orderItemId, quantity },
		{ cache: "no-cache" },
	);

	if (!response) {
		return null;
	}

	return response as OrderItem;
}
