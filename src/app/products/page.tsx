import { ProductList } from "@/ui/organisms/ProductList";

function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-20 p-24">
			<h1 className="text-3xl font-bold">Product list page</h1>
			<ProductList />
		</main>
	);
}

export default Page;
