import Link from "next/link";
import { getCartFromCookies } from "@/api/cart";
import CartItems from "@/ui/organisms/CartItems";
import Payments from "@/ui/organisms/Payments";

export default function CartPage() {
	const cart = getCartFromCookies();

	return (
		<main className="column-wrapper">
			<div className="bg-white rounded-md p-4">
				<h1 className="text-xl font-bold mb-3">Cart</h1>
				<CartItems cart={cart} />
				<div className="mt-5">
					<Link
						href="/cart/details"
						className="text-sm text-neutral-600 hover:text-neutral-900 hover:underline"
					>
						View details
					</Link>
				</div>
				<Payments cart={cart} />
			</div>
		</main>
	);
}
