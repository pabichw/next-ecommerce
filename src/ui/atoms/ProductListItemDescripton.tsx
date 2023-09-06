import type { Product } from "@/types";
import { formatMoney } from "@/utils/money";

type ProductListItemDescriptionProps = {
	product: Product;
};

export const ProductListItemDescription = ({ product }: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col gap-5 w-full justify-between">
			<p className="text-xs">{product.name}</p>
			<p className="font-bold text-xs">{formatMoney(product.price)}</p>
		</div>
	);
};
