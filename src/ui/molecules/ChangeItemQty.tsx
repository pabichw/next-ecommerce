"use client"
/* eslint-disable @typescript-eslint/no-misused-promises */
import { MinusIcon, PlusIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQtyAction } from "@/actions/cart";

type ChangeItemQtyType = "increment" | "decrement";

export function ChangeItemQty({
	orderItemId,
	currentQty,
	type = "increment",
  dataTestId,
}: {
	orderItemId: string;
	currentQty: number;
	type: ChangeItemQtyType;
  dataTestId: string;
}) {
	const isDisabled = currentQty === 1 && type === "decrement";
  const [optimisticValue, setOptimisticValue] = useOptimistic(currentQty, (state, value: number) => value )

	return (
		<button
      data-testId={dataTestId}
			disabled={isDisabled}
			className={twMerge(isDisabled && "cursor-not-allowed")}
			formAction={async () => {
        const newValue = type === "increment" ? optimisticValue + 1 : optimisticValue - 1;
        setOptimisticValue(newValue);

				await changeItemQtyAction(
					orderItemId,
					newValue
				);
			}}
		>
			{type === "increment" ? <PlusIcon /> : <MinusIcon />}
		</button>
	);
}
