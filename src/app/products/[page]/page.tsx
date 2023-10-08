import { getProducts } from "@/api/products";
import NoMatch from "@/ui/organisms/NoMatch";
import Pagination from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import SortProducts from "@/ui/organisms/SortProducts";

type ProductsPageProps = {
	params: {
		page: string;
	};
	searchParams: {
		sorting: string;
	};
};

export function generateStaticParams() {
	return Array.from({ length: 10 }).map((_, idx) => {
		return { page: (idx + 1).toString() };
	});
}

async function ProductsPage({ params, searchParams }: ProductsPageProps) {
	const products = await getProducts({ page: params.page, sorting: searchParams.sorting });

	if (!products) {
		return <NoMatch />;
	}

	return (
		<main className="column-wrapper flex flex-col gap-20">
			<div className="">
				<SortProducts defaultSorting={searchParams.sorting} />
			</div>
			<ProductList products={products} />
			<Pagination resourcePath={"/products"} totalPages={3} searchParams={searchParams} />
		</main>
	);
}

export default ProductsPage;
