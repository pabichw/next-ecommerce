import { getProductById } from "@/api/products";
import { formatMoney } from "@/utils/money";
import { Metadata } from "next";
import Image from "next/image";

type ProductPageProps = {
	params: {
		id: string;
	};
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const productData = await getProductById(params.id);
	return {
		title: `${productData.title} - online shop`,
		description: productData.description.slice(0, 200),
		category: productData.category,
		keywords: `${productData.title.split(" ").join(", ")}${productData.category}`,
		openGraph: {
			title: productData.title,
			description: productData.description,
			images: [productData.image],
		},
	};
}

async function ProductPage({ params: { id } }: ProductPageProps) {
	const productData = await getProductById(id);
	const product = {
		id: productData.id,
		name: productData.title,
		category: productData.category,
		price: { value: productData.price, currency: "USD" },
		coverImage: {
			alt: productData.title,
			src: productData.image,
		},
	};

	return (
		<main>
			<h2>{product.name}</h2>
			<h4 className="font-bold">{formatMoney(product.price)}</h4>
			<Image width={400} height={400} src={product.coverImage.src} alt={product.coverImage.alt} />
		</main>
	);
}

export default ProductPage;
