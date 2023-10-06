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
				<Payments cart={cart} />
			</div>
		</main>
	);
}
