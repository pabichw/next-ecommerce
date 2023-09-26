import { Product, ProductGetDocument, ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/gql";

export async function getProducts({ page }: { page: string }): Promise<Product[] | null> {
	const { product: products } = await executeGraphql(ProductsGetListDocument, {
		pagination: { page: Number(page), pageSize: 10 },
	});

	if (!products) {
		return null;
	}

	return products as Product[];
}

export async function getProductById(id: string): Promise<Product> {
	const { product: products } = await executeGraphql(ProductGetDocument, { id });

	return products[0] as Product;
}
