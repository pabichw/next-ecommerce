import { Metadata } from "next";
import Image from "next/image";
import { getProductById } from "@/api/products";
import ProductConfigurator from "@/ui/organisms/ProductConfigurator";
import { RelatedProduct } from "@/ui/organisms/RelatedProducts";
import { formatMoney } from "@/utils/money";

type ProductPageProps = {
	params: {
		id: string;
	};
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const productData = await getProductById(params.id);

	return {
		title: `${productData.name} - online shop`,
		description: productData.description,
		category: productData.category?.reduce((aggr, curr) => `${aggr}`.concat(curr?.name || ""), ""),
		keywords: productData.name.split(" ").join(", "),
		openGraph: {
			title: productData.name,
			description: productData.description,
			images: [productData.image],
		},
	};
}

async function ProductPage({ params: { id } }: ProductPageProps) {
	const product = await getProductById(id);

	return (
		<main className="column-wrapper md:px-32 pt-12 md:pt-28">
			<div className="flex flex-col md:flex-row gap-8 space-between">
				<div className="flex-1 p-5 border-grey-200 shadow-sm bg-white rounded-lg">
					<Image
						className="mx-auto"
						width={400}
						height={400}
						src={product.image}
						alt={product.name}
					/>
				</div>
				<div className="flex-1 flex flex-col gap-2 py-5">
					<h1 className="font-bold text-xl">{product.name}</h1>
					<h4 className="font-bold">{formatMoney(product.price)}</h4>
					{product.description && (
						<p className="mt-5 p-2 border-grey-200 shadow-sm bg-white rounded-lg">{product.description}</p>
					)}
					<ProductConfigurator product={product} />
				</div>
			</div>
			{product.relatedProduct && (
				<div className="mt-10 p-5 border-grey-200 shadow-sm bg-white rounded-lg">
					<RelatedProduct products={product.relatedProduct} />
				</div>
			)}
		</main>
	);
}

export default ProductPage;
