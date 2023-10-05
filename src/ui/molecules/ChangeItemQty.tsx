/* eslint-disable @typescript-eslint/no-misused-promises */
import { MinusIcon, PlusIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { changeItemQtyAction } from "@/actions/cart";

type ChangeItemQtyType = "increment" | "decrement";

export function ChangeItemQty({
	orderItemId,
	currentQty,
	type = "increment",
}: {
	orderItemId: string;
	currentQty: number;
	type: ChangeItemQtyType;
}) {
	const isDisabled = currentQty === 1 && type === "decrement";
	return (
		<button
			disabled={isDisabled}
			className={twMerge(isDisabled && "cursor-not-allowed")}
			formAction={async () => {
				"use server";
				await changeItemQtyAction(
					orderItemId,
					type === "increment" ? currentQty + 1 : currentQty - 1,
				);
			}}
		>
			{type === "increment" ? <PlusIcon /> : <MinusIcon />}
		</button>
	);
}
