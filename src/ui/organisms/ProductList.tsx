import { Product } from "@/types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: Product[] }) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grdi-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-8"
		>
			{products.map((product) => (
				<ProductListItem key={product.name} product={product} />
			))}
		</ul>
	);
};
