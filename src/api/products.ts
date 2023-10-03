import {
	CreateReviewDocument,
	Product,
	ProductGetDocument,
	ProductsGetListDocument,
	Review,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils/gql";

export async function getProducts({ page }: { page: string }): Promise<Product[] | null> {
	const { product: products } = await executeGraphql(
		ProductsGetListDocument,
		{
			pagination: { page: Number(page), pageSize: 10 },
		},
		{ tags: ["products"] },
	);

	if (!products) {
		return null;
	}

	return products as Product[];
}

export async function getProductById(id: string): Promise<Product> {
	const { product: products } = await executeGraphql(ProductGetDocument, { id });

	return products[0] as Product;
}

export async function searchProductByName({
	name,
	page,
}: {
	name: string;
	page: string;
}): Promise<Product[]> {
	const { product: products } = await executeGraphql(
		ProductsGetListDocument,
		{
			name,
			pagination: { page: Number(page), pageSize: 10 },
		},
		{ tags: ["products"] },
	);

	return products as Product[];
}

export async function sendReview(productId: string, reviewData: Omit<Review, "id">) {
	const responseData = await executeGraphql(CreateReviewDocument, {
		productId,
		reviewInput: reviewData,
	});

	if (!responseData) {
		return false;
	}

	return true;
}
