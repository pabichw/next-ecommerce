import { getProductById } from "@/api/products";
import { formatMoney } from "@/utils/money";
import Image from "next/image";

type ProductPageProps = {
	params: {
		id: string;
	};
};

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
		<main className="p-8 max-w-[1480px] m-auto">
			<h2>{product.name}</h2>
			<h4 className="font-bold">{formatMoney(product.price)}</h4>
			<div>
				<Image width={400} height={400} src={product.coverImage.src} alt={product.coverImage.alt} />
			</div>
		</main>
	);
}

export default ProductPage;
