import type { Product } from "@/types";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescripton";

export const ProductListItem = ({ product }: { product: Product }) => {
	return (
		<li className="group flex flex-col gap-3 p-3 rounded-md cursor-pointer shadow shadow-slate-200 hover:shadow-xl hover:outline hover:outline-slate-200 hover:outline-1">
			<ProductListItemCoverImage image={product.coverImage} />
			<ProductListItemDescription product={product} />
		</li>
	);
};
