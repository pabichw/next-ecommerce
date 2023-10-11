"use client";

/* eslint-disable @typescript-eslint/no-misused-promises */
import { MinusIcon, PlusIcon } from "lucide-react";
import { experimental_useOptimistic as useOptimistic } from "react";
import { twMerge } from "tailwind-merge";

import RemoveCartItem from "./RemoveCartItem";
import { changeItemQtyAction } from "@/actions/cart";

export function ChangeItemQty({
	orderId,
	orderItemId,
	currentQty,
}: {
	orderId: string;
	orderItemId: string;
	currentQty: number;
}) {
	const [optimisticValue, setOptimisticValue] = useOptimistic(
		currentQty,
		(_, value: number) => value,
	);

	return (
		<form className="flex">
			<button
				data-testid="increment"
				className={twMerge(
					"w-5 bg-neutral-100 rounded-sm flex items-center justify-between transition-colors",
				)}
				type="submit"
				formAction={async () => {
					const newValue = optimisticValue + 1;
					setOptimisticValue(newValue);

					await changeItemQtyAction("", orderItemId, newValue);
				}}
			>
				<PlusIcon />
			</button>
			<span data-testid="quantity" className="w-8 text-center">
				{optimisticValue}
			</span>
			<button
				data-testid="decrement"
				disabled={optimisticValue === 1}
				type="submit"
				className={twMerge(
					"w-5 bg-neutral-100 rounded-sm flex items-center justify-between transition-colors",
				)}
				formAction={async () => {
					const newValue = optimisticValue - 1;
					setOptimisticValue(newValue);

					await changeItemQtyAction("", orderItemId, newValue);
				}}
			>
				<MinusIcon />
			</button>
			<span className="ml-5">
				<RemoveCartItem orderId={orderId} orderItemId={orderItemId} />
			</span>
		</form>
	);
}
