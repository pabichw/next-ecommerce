type ProductListItemCoverImageProps = {
  image: Image;
};

export const ProductListItemCoverImage = ({ image }: ProductListItemCoverImageProps) => {
  return (
    <span className={`overflow-hidden w-[125px]`} >
      <img className="transition ease-in-out transition-scale group-hover:scale-125" src={image.src} alt={image.alt} />
    </span>
  )
};
