"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import SelectInput from "@/ui/atoms/SelectInput";

function SortProducts({ defaultSorting }: { defaultSorting: string }) {
	const { push } = useRouter();

	const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.selectedOptions[0].value;

		if (!value) {
			push("/products/1");
			return;
		}

		push(`/products/1?sorting=${value}`);
	};

	return (
		<div>
			<label htmlFor="product-sort-input" className="block text-xs color-gray-200">
				Sort
			</label>
			<SelectInput
				id="product-sort-input"
				dataTestIdOption="sort-by-price"
				options={[
					{ value: "sort-price-asc", label: "Sort by price ascending" },
					{ value: "sort-price-desc", label: "Sort by price descending" },
				]}
				defaultValue={defaultSorting}
				placeholder="Sort by..."
				onChange={handleOnChange}
			/>
		</div>
	);
}

export default SortProducts;
