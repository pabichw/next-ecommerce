import { ProductListItem } from "@/ui/molecules/ProductListItem";
import type { Product } from '@/types';

const FAKE_PRODUCTS: Product[] = [
  {
    name: "Talerz",
    price: { value: 100 },
    coverImage: {
      src: "http://via.placeholder.com/150x125/782",
      alt: "Fajny talerz",
    },
  },
  {
    name: "Koudra",
    price: { value: 200 },
    coverImage: {
      src: "http://via.placeholder.com/150x125/82",
      alt: "Miętka kordła",
    },
  },
  {
    name: "Kubek",
    price: { value: 200 },
    coverImage: {
      src: "http://via.placeholder.com/150x125/252",
      alt: "Miętka kordła",
    },
  },
];

export const ProductList = () => {
  return (
    <ul data-testid="products-list" className="flex gap-8">
      {FAKE_PRODUCTS.map((product) => (
        <ProductListItem key={product.name} product={product} />
      ))}
    </ul>
  );
};
