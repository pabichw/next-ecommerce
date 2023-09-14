type ProductItemResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export async function getProducts(): Promise<[ProductItemResponse]> {
	const result = await fetch(`${process.env.API_URL}/products?take=20`);
	const data = (await result.json()) as [ProductItemResponse];

	return data;
}

export async function getProductById(id: string): Promise<ProductItemResponse> {
	const result = await fetch(`${process.env.API_URL}/products/${id}`);
	const data = (await result.json()) as ProductItemResponse;

	return data;
}
