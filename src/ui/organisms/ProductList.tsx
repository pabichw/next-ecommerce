import { Maybe, Product } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: Maybe<Product>[] }) => {
	if (!products || products.length === 0) {
		return <div>No products found</div>;
	}

	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-5 mx-auto"
		>
			{products.map((product) => (
				<ProductListItem key={product?.name} product={product} />
			))}
		</ul>
	);
};
