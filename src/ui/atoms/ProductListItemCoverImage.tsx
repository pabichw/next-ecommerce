import type { Image } from "@/types";

type ProductListItemCoverImageProps = {
  image: Image;
};

export const ProductListItemCoverImage = ({ image }: ProductListItemCoverImageProps) => {
  return (
    <div className="overflow-hidden">
      <img
        className="transition ease-in-out w-full h-24 transition-scale group-hover:scale-125"
        src={image.src}
        alt={image.alt}
      />
    </div>
  );
};
