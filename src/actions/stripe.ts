import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { Maybe, OrderItem } from "@/gql/graphql";
import { getCartFromCookies } from "@/api/cart";

export async function handleStripePaymentAction() {
	"use server";

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const cart = getCartFromCookies();

	if (!cart) {
		console.error("Couldn't find cart");
		return;
	}

	const session = await stripe.checkout.sessions.create({
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.items
			?.map((item: Maybe<OrderItem>) => ({
				price_data: {
					currency: "usd",
					product_data: {
						name: item?.product?.name || "",
						description: item?.product?.description,
						...(item?.product?.image ? { images: [item?.product?.image || ""] } : {}),
					},
					unit_amount: Number(item?.product?.price) * 100,
				},
				quantity: item?.quantity,
			}))
			.filter(Boolean),
		mode: "payment",
		success_url: `${headers().get("origin")}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${headers().get("origin")}/canceled`,
	});

	if (session.url) {
		cookies().delete("cartId");
		cookies().delete("cart");
		redirect(session.url);
	}
}
