import { Metadata } from "next";
import Image from "next/image";
import { getProductById } from "@/api/products";
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
    description: '',
    category: productData.category,
    keywords: `${productData.name.split(" ").join(", ")}${productData.category}`,
    openGraph: {
      title: productData.name,
      description: "",
      images: [productData.image],
    },
  };
}

async function ProductPage({ params: { id } }: ProductPageProps) {
  const product = await getProductById(id);

  return (
    <main className="column-wrapper md:px-32 pt-12 md:pt-28">
      <div className="flex flex-col md:flex-row gap-8 space-between">
        <div className="flex-1 p-5 bg-neutral-200 rounded-lg">
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
          <p>Lorem mopsum</p>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
