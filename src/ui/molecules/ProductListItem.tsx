import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescripton";

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <li className="group flex flex-col gap-1 p-3 rounded-md transition ease-in-out transition-shadow shadow shadow-slate-200 outline outline-slate-200 hover:shadow-xl hover:outline-1 cursor-pointer">
      <ProductListItemCoverImage image={product.coverImage} />
      <ProductListItemDescription product={product} />
    </li>
  );
};
