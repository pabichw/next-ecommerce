import { getProducts } from "@/api/products";
import Pagination from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

type ProductsPageProps = {
  params: {
    page: string;
  };
};

export function generateStaticParams() {
  return Array.from({ length: 10 }).map((_, idx) => {
    return { page: (idx + 1).toString() };
  });
}

async function ProductsPage({ params }: ProductsPageProps) {
  const products = await getProducts({ page: params.page })

  return (
    <main className="column-wrapper flex flex-col gap-20">
      <ProductList products={products} />
      <Pagination resourcePath={"/products"} totalPages={10} />
    </main>
  );
}

export default ProductsPage;
