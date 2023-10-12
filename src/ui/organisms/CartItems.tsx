import Link from "next/link";
import { Order } from "@/gql/graphql";
import { ChangeItemQty } from "@/ui/molecules/ChangeItemQty";

function CartItems({ cart }: { cart?: Order | null }) {
	return (
		<ul className="flex flex-col gap-2">
			{cart?.items?.length === 0 && <span>No products in cart 🦦</span>}
			{cart?.items?.map(
				(item) =>
					item && (
						<li key={`${item.id}`} className="flex w-full justify-between items-center">
							<Link href={`/product/${item.product?.id}`}>{item.product?.name}</Link>
							<p className="text-neutral-300">{item.configurableAttributes}</p>
							<ChangeItemQty orderId={cart.id} orderItemId={item.id} currentQty={item.quantity} />
						</li>
					),
			)}
		</ul>
	);
}

export default CartItems;
