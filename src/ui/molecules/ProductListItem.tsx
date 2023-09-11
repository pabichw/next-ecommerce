import type { Product } from "@/types";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescripton";

export const ProductListItem = ({ product }: { product: Product }) => {
	return (
		<li className="group flex flex-col gap-3 p-3 w-32 rounded-md cursor-pointer outline outline-slate-200 shadow shadow-slate-200 hover:shadow-xl">
			<ProductListItemCoverImage image={product.coverImage} />
			<ProductListItemDescription product={product} />
		</li>
	);
};
