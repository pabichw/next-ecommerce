import { getProducts } from "@/api/products";
import { type Product } from "@/types";
import { ProductList } from "@/ui/organisms/ProductList";

async function Page() {
	const products = await getProducts();

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
		<main className="flex flex-col items-center gap-20 p-24">
			<h1 className="text-3xl font-bold">Product list page</h1>
			<ProductList products={formattedProducts} />
		</main>
	);
}

export default Page;
