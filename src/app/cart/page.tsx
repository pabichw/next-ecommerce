import { getCartFromCookies } from "@/api/cart";
import { ChangeItemQty } from "@/ui/molecules/ChangeItemQty";

export default function CollectionPage() {
	const cart = getCartFromCookies();

	return (
		<main className="column-wrapper">
			<ul>
				{cart?.items?.map(
					(item) =>
						item && (
							<li key={`${item.id}`}>
								{item.product?.name}
								<form>
									<ChangeItemQty
										orderItemId={item.id}
										currentQty={item.quantity}
										type="decrement"
									/>
									{item.quantity}
									<ChangeItemQty
										orderItemId={item.id}
										currentQty={item.quantity}
										type="increment"
									/>
								</form>
							</li>
						),
				)}
			</ul>
		</main>
	);
}
