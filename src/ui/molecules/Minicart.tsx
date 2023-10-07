import { ShoppingCart } from "lucide-react";
import { type Route } from "next";
import Link from "next/link";
import Touchable from "@/ui/atoms/Touchable";
import { getCartFromCookies } from "@/api/cart";

function Minicart() {
	const cart = getCartFromCookies();

	return (
		<Touchable>
			<Link href={"/cart" as Route}>
				<ShoppingCart size={20} strokeWidth={2} />
				{Number(cart?.items?.length) > 0 && (
					<span className="absolute -top-2 -right-2 w-[15px] h-[15px] bg-red-800 text-neutral-50 text-xs rounded-full">
						{cart?.items?.length}
					</span>
				)}
			</Link>
		</Touchable>
	);
}

export default Minicart;
