import Link from "next/link";
import { Maybe, Product } from "@/gql/graphql";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescripton";

export const ProductListItem = ({ product }: { product: Maybe<Product> }) => {
	if (!product) {
		return null;
	}

	return (
		<li className="mx-auto">
			<Link
				className="group flex flex-col gap-3 p-3 w-32 bg-white rounded-md cursor-pointer outline outline-slate-100 outline-1 shadow shadow-slate-200 hover:shadow-xl"
				href={`/product/${product.id}`}
			>
				<ProductListItemCoverImage image={{ src: product.image, alt: product.name }} />
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
