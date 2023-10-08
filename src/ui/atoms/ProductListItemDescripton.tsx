import { Product } from "@/gql/graphql";
import { Rating } from "@/ui/molecules/Rating";
import { formatMoney } from "@/utils/money";

type ProductListItemDescriptionProps = {
	product: Product;
};

export const ProductListItemDescription = ({ product }: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col flex-1 gap-4 w-full justify-between">
			<h3 className="text-xs">{product.name}</h3>
			<Rating id="overal-rating" value={Math.ceil(product.reviewAvg || 0)} size="small" />
			<p data-testId="product-rating" className="text-xs">{product.reviewAvg}</p>
			<p data-testid="product-price" className="font-bold text-xs">
				{formatMoney(product.price)}
			</p>
		</div>
	);
};
