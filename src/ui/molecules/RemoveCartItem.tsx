/* eslint-disable @typescript-eslint/no-misused-promises */
import { changeItemQtyAction } from "@/actions/cart";

function RemoveCartItem({ orderId, orderItemId }: { orderId: string; orderItemId: string }) {
	return (
		<button
			className="text-red-900 hover:underline"
			formAction={async () => {
				"use server";
				await changeItemQtyAction(orderId, orderItemId, 0);
			}}
		>
			Remove
		</button>
	);
}

export default RemoveCartItem;
