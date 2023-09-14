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

export async function getProducts({ page }: { page: string }): Promise<[ProductItemResponse]> {
	const take = 20;
	const offset = take * Number(page || 0);
	const result = await fetch(`${process.env.API_URL}/products?take=${take}&offset=${offset}`);
	const data = (await result.json()) as [ProductItemResponse];

	return data;
}

export async function getProductById(id: string): Promise<ProductItemResponse> {
	const result = await fetch(`${process.env.API_URL}/products/${id}`);
	const data = (await result.json()) as ProductItemResponse;

	return data;
}
