"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import SelectInput from "@/ui/atoms/SelectInput";

function SortProducts({ defaultSorting }: { defaultSorting: string }) {
	// eslint-disable-next-line @typescript-eslint/unbound-method
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
				defaultValue={defaultSorting}
				placeholder="Sort by..."
				onChange={handleOnChange}
			>
				<option value="">Default</option>
				<option value="sort-price-asc" data-testid="sort-by-price">
					Sort by price ascending
				</option>
				<option value="sort-price-desc" data-testid="sort-by-price">
					Sort by price descending
				</option>
				<option value="sort-rating-asc" data-testid="sort-by-rating">
					Sort by rating ascending
				</option>
				<option value="sort-rating-desc" data-testid="sort-by-rating">
					Sort by rating descending
				</option>
			</SelectInput>
		</div>
	);
}

export default SortProducts;
