import { Category, CategoryGetDocument, CategoryGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/gql";

export async function getCategories(options: {
	page: string | number;
	pageSize: string | number;
}): Promise<Category[] | null> {
	const data = await executeGraphql(CategoryGetListDocument, {
		pagination: { page: Number(options.page), pageSize: Number(options.pageSize) },
	});

	if (!data.category) {
		return null;
	}

	return data.category as Category[];
}

export const getCategoryBySlug = async ({
	slug,
	page = 1,
	pageSize = 20,
}: {
	slug: string;
	page: number;
	pageSize: number;
}): Promise<Category | null> => {
	const { category: categories } = await executeGraphql(CategoryGetDocument, {
		slug,
		pagination: { page, pageSize },
	});

	if (!categories) {
		return null;
	}

	return categories[0] as Category;
};
