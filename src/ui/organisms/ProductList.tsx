import { Product } from "@/types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: Product[] }) => {
	return (
		<ul data-testid="products-list" className="flex flex-wrap gap-8">
			{products.map((product) => (
				<ProductListItem key={product.name} product={product} />
			))}
		</ul>
	);
};
