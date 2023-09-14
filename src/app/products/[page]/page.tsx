import { getProducts } from "@/api/products";
import { type Product } from "@/types";
import Pagination from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

type ProductsPageProps = {
	params: {
		page: string;
	};
};

export function generateStaticParams() {
	return Array.from({ length: 10 }).map((_, idx) => {
		return { page: (idx + 1).toString() };
	});
}

async function ProductsPage({ params }: ProductsPageProps) {
	const products = await getProducts({ page: params.page });

	const formattedProducts: Product[] = products.map((product) => ({
		id: product.id,
		name: product.title,
		category: product.category,
		price: { value: product.price, currency: "USD" },
		coverImage: {
			alt: product.title,
			src: product.image,
		},
	}));

	return (
		<main className="flex flex-col gap-20">
			<ProductList products={formattedProducts} />
			<Pagination resourcePath={"/products"} totalPages={10} />
		</main>
	);
}

export default ProductsPage;
