"use server";

import { addToCart, changeItemQty, getOrCreateCart } from "@/api/cart";

export async function addToCartAction(formData: FormData) {
	const cart = await getOrCreateCart();
	if (!cart) {
		throw new Error("Error getting/creating cart");
	}

	await addToCart(cart.id, String(formData.get("productId")), 1, "");
}

export async function changeItemQtyAction(orderId: string, orderItemId: string, quantity: number) {
	"use server";

	await changeItemQty(orderId, orderItemId, quantity);
	await getOrCreateCart();
}
