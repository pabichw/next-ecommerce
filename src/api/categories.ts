import { Category, CategoryGetDocument, CategoryGetListDocument } from "@/gql/graphql";
import { mapProductResponseToProduct } from "./products";
import { executeGraphql } from "@/utils/gql";

export const mapCategoryResponseItemToCategory = (category: any): Category => ({
  id: category.id || '',
  name: category.name || '',
  slug: category.slug || '',
  product: !category.product || category.length === 0 ? [] : category.product.map(mapProductResponseToProduct)
})

export async function getCategories(options: {
  page: string | number, pageSize: string | number
}): Promise<Category[]> {
  const data = await executeGraphql(CategoryGetListDocument, { pagination: { page: Number(options.page), pageSize: Number(options.pageSize) } });


  if (!data.category) {
    return []
  }

  console.log('data', data);

  return data.category.map(mapCategoryResponseItemToCategory)
}

export const getCategoryBySlug = async ({ slug, page = 1, pageSize = 20 }: { slug: string, page: number | undefined, pageSize: number | undefined }): Promise<Category> => {
  console.log(slug, page, pageSize);
  const { category: categories } = await executeGraphql(CategoryGetDocument, { slug, pagination: { page, pageSize } });

  return mapCategoryResponseItemToCategory(categories[0])
}
