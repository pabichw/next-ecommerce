import Link from "next/link";
import Stripe from "stripe";
import { markOrderAndClear } from "@/actions/cart";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { cart_id: string; session_id: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.session_id);

	if (searchParams.cart_id && stripeCheckoutSession.status === "complete") {
		await markOrderAndClear(searchParams.cart_id, "paid", stripeCheckoutSession);
	}

	return (
		<main className="column-wrapper text-center mt-32">
			<div className="bg-white w-fit mx-auto rounded-md p-10">
				<h2 className="text-bold text-3xl mb-4">Thank you!</h2>
				Payment status:
				<div className="font-bold mb-4">{stripeCheckoutSession.payment_status.toUpperCase()}</div>
				<Link
					href="/"
					className="inline-block text-neutral-50 font-bold bg-sky-400 hover:bg-sky-500 py-2 px-3 rounded-md transition-colors"
				>
					Continue shopping
				</Link>
			</div>
		</main>
	);
}
