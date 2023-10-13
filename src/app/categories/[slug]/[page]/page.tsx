import { Metadata } from "next";
import { getCategoryBySlug } from "@/api/categories";
import Pagination from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

type CategoryPageProps = {
	params: {
		page: string;
		slug: string;
	};
};

// export function generateStaticParams(params: unknown) {
// 	console.log('params', params);

// 	return Array.from({ length: 1 }).map((_, idx) => {
// 		return { page: (idx + 1).toString() };
// 	});
// }

export async function generateMetadata({
	params,
}: {
	params: { page: string; slug: string };
}): Promise<Metadata> {
	const result = await getCategoryBySlug({
		slug: params.slug,
		page: Number(params.page),
		pageSize: 10,
	});

	const category = result?.data[0];

	return {
		title: `${category?.name} - online shop`,
		openGraph: {
			title: `${category?.name} - online shop`,
		},
	};
}

async function CategoryPage({ params }: CategoryPageProps) {
	const result = await getCategoryBySlug({
		slug: params.slug,
		page: Number(params.page),
		pageSize: 10,
	});

	const category = result?.data[0];

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
			<Pagination
				resourcePath={`/categories/${params.slug}`}
				totalPages={result.pagination?.pages || 1}
			/>
		</main>
	);
}

export default CategoryPage;
