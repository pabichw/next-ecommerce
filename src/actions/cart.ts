"use server";

import { headers } from "next/headers";
import Stripe from "stripe";
import { addToCart, changeItemQty, getOrCreateCart } from "@/api/cart";
import { updateOrderOwnership, updateOrderStatus } from "@/api/orders";

export async function addToCartAction(formData: FormData) {
	"use server";
	const cart = await getOrCreateCart();
	if (!cart) {
		throw new Error("Error getting/creating cart");
	}

	const configurableAttributes = new URL(headers().get("referer") || "").searchParams.get("attr");

	await addToCart(
		cart.id,
		String(formData.get("productId")),
		1,
		configurableAttributes || undefined,
	);
}

export async function changeItemQtyAction(orderId: string, orderItemId: string, quantity: number) {
	"use server";

	await changeItemQty(orderId, orderItemId, quantity);
	await getOrCreateCart();
}

export async function markOrderAndClear(
	cartId: string,
	_: string,
	stripCheckoutSession?: Stripe.Checkout.Session,
): Promise<void> {
	"use server";

	if (!cartId) {
		console.log("No cartid. wont update order ");
		return;
	}

	await updateOrderStatus({ orderId: cartId || "", status: "paid" });

	if (stripCheckoutSession?.customer_details?.email) {
		await updateOrderOwnership({
			orderId: cartId || "",
			userEmail: stripCheckoutSession.customer_details?.email,
		});
	}
}
