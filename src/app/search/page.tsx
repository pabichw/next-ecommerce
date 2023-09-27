import { searchProductByName } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const searchResults = await searchProductByName({ name: searchParams.query, page: "1" });

	return (
		<main className="column-wrapper">
			<h3 className="text-xl mb-4">
				Search results for <span className="text-sky-400 font-bold">{searchParams.query}</span>:
			</h3>
			<ProductList products={searchResults} />
		</main>
	);
}
