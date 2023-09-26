import { getCategoryBySlug } from "@/api/categories";
import Pagination from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

type CategoryPageProps = {
	params: {
		page: string;
		slug: string;
	};
};

export function generateStaticParams() {
	return Array.from({ length: 1 }).map((_, idx) => {
		return { page: (idx + 1).toString() };
	});
}

async function CategoryPage({ params }: CategoryPageProps) {
	const category = await getCategoryBySlug({
		slug: params.slug,
		page: Number(params.page),
		pageSize: 10,
	});

	if (!category) {
		return <span>Yikes. No such category</span>;
	}

	return (
		<main className="column-wrapper flex flex-col gap-20">
			<h2 className="text-2xl font-bold">{category.name}</h2>
			{category.product && category.product.length > 0 ? (
				<ProductList products={category.product} />
			) : (
				<span>No products</span>
			)}
			<Pagination resourcePath={`/categories/${params.slug}`} totalPages={10} />
		</main>
	);
}

export default CategoryPage;
