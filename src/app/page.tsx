import { Route } from "next";
import Link from "next/link";
import { getCollections } from "@/api/collections";
import { getProducts } from "@/api/products";
import Collection from "@/ui/organisms/Collection";
import { ProductList } from "@/ui/organisms/ProductList";
import { nameToSlug } from "@/utils/collections";

export default async function Home() {
	const products = await getProducts({ page: "1" });
	const collections = await getCollections();

	return (
		<main className="column-wrapper">
			<div data-testid="related-products">
				<div className="mb-5">
					<Collection name="Suggested products collection" />
				</div>
			</div>
			<div className="mt-10" data-testid="products-list">
				<h3 className="text-l mb-5">Other products</h3>
				{products ? <ProductList products={products} /> : <span>No products</span>}
			</div>
			<div className="mt-10">
				<h3>Browse collections:</h3>
				{collections?.map((collection) => (
					<Link
						key={`collection-${collection.id}`}
						className="text-md text-sky-400 hover:underline mr-2"
						href={`/collections/${nameToSlug(collection.name)}` as Route}
					>
						{collection.name}
					</Link>
				))}
			</div>
		</main>
	);
}
