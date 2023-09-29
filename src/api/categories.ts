import {
	CategoryGetDocument,
	CategoryGetListDocument,
	CategoryWithPagination,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils/gql";

export async function getCategories(options: {
	page: string | number;
	pageSize: string | number;
}): Promise<CategoryWithPagination | null> {
	const { category } = await executeGraphql(CategoryGetListDocument, {
		pagination: { page: Number(options.page), pageSize: Number(options.pageSize) },
	});

	if (!category) {
		return null;
	}

	return category as CategoryWithPagination;
}

export const getCategoryBySlug = async ({
	slug,
	page = 1,
	pageSize = 20,
}: {
	slug: string;
	page: number;
	pageSize: number;
}): Promise<CategoryWithPagination | null> => {
	const { category: categories } = await executeGraphql(CategoryGetDocument, {
		slug,
		pagination: { page, pageSize },
	});

	if (!categories) {
		return null;
	}

	return categories as CategoryWithPagination;
};
