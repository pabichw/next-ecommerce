import { ProductList } from "./ProductList";
import { Maybe, Product } from "@/gql/graphql";


type RelatedProductProps = {
	products: Maybe<Product>[];
};

export function RelatedProduct({ products }: RelatedProductProps) {
	return (
		<div data-testid="related-products">
			<h3 className="mb-5 text-l font-bold">Related products</h3>
			<ProductList products={products} />
		</div>
	);
}
