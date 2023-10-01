import { Product } from "@/gql/graphql";
import { formatMoney } from "@/utils/money";

type ProductListItemDescriptionProps = {
	product: Product;
};

export const ProductListItemDescription = ({ product }: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col flex-1 gap-4 w-full justify-between">
			<h3 className="text-xs">{product.name}</h3>
			<p className="font-bold text-xs">{formatMoney(product.price)}</p>
		</div>
	);
};
