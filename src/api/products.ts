import { ProductGetDocument, ProductsGetListDocument } from "@/gql/graphql";
import { Product } from "@/types";
import { executeGraphql } from "@/utils/gql";

export const mapProductResponseToProduct = (product: any): Product => ({
  id: product?.id || '',
  name: product?.name || '',
  price: { value: product?.price || NaN, currency: 'USD' },
  category: product?.category?.[0]?.name || '',
  image: product?.image
})

export async function getProducts({ page }: { page: string }): Promise<Product[]> {
  const { product: products } = await executeGraphql(ProductsGetListDocument, { pagination: { page: Number(page), pageSize: 10 } });

  return products.map(mapProductResponseToProduct)
}

export async function getProductById(id: string): Promise<Product> {
  const { product: products } = await executeGraphql(ProductGetDocument, { id });

  return mapProductResponseToProduct(products[0]);
}
