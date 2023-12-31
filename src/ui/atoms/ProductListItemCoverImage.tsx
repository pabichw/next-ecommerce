import Image from "next/image";

type ProductListItemCoverImageProps = {
	image: { src: string; alt: string };
};

export const ProductListItemCoverImage = ({ image }: ProductListItemCoverImageProps) => {
	return (
		<div className="overflow-hidden">
			{image.src ? (
				<Image
					className="transition ease-in-out w-full h-24 transition-scale group-hover:scale-125"
					height={250}
					width={250}
					src={image.src}
					alt={image.alt}
				/>
			) : (
				<div className="w-full h-[104px] bg-neutral-200 rounded-sm" />
			)}
		</div>
	);
};
