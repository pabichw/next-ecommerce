import { getProducts } from "@/api/products";
import Collection from "@/ui/organisms/Collection";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProducts({ page: "1" });

	return (
		<main className="column-wrapper">
			<div data-testid="related-products">
				<Collection name="Suggested products collection" />
			</div>
			<div className="mt-10" data-testid="products-list">
				<h3 className="text-l mb-5">Other products</h3>
				{products ? <ProductList products={products} /> : <span>No products</span>}
			</div>
		</main>
	);
}
