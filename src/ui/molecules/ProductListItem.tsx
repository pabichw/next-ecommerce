import type { Product } from "@/types";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescripton";
import Link from "next/link";

export const ProductListItem = ({ product }: { product: Product }) => {
	return (
		<li>
			<Link
				className="group flex flex-col gap-3 p-3 w-32 rounded-md cursor-pointer outline outline-slate-100 outline-1 shadow shadow-slate-200 hover:shadow-xl"
				href={`/product/${product.id}`}
			>
				<ProductListItemCoverImage image={product.coverImage} />
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
