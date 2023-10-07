import { getCartFromCookies } from "@/api/cart";
import { Overlay } from "@/ui/molecules/Overlay";
import CartItems from "@/ui/organisms/CartItems";

function CartModalPage() {
	const cart = getCartFromCookies();

	return (
		<>
			<Overlay />
			<div className="absolute p-4 top-0 right-0 z-[12] h-screen w-[300px] bg-white shadow">
				<h1 className="font-bold text-lg">Order details:</h1>
				<CartItems cart={cart} />
			</div>
		</>
	);
}

export default CartModalPage;
