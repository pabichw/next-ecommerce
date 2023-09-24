import { getCategoryBySlug } from "@/api/categories";
import { getProducts } from "@/api/products";
import { ProductsGetListDocument } from "@/gql/graphql";
import { type Product } from "@/types";
import Pagination from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { executeGraphql } from "@/utils/gql";

type CategoryPageProps = {
  params: {
    page: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return Array.from({ length: 1 }).map((_, idx) => {
    return { page: (idx + 1).toString() };
  });
}

async function CategoryPage({ params }: CategoryPageProps) {

  const category = await getCategoryBySlug({ slug: params.slug, page: Number(params.page) });

  return (
    <main className="column-wrapper flex flex-col gap-20">
      <h2 className="text-2xl font-bold">{category.name}</h2>
      <ProductList products={category.product} />
      <Pagination resourcePath={`/categories/${params.slug}`} totalPages={10} />
    </main>
  );
}

export default CategoryPage;
