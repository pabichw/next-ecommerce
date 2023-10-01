import { ImageResponse } from "next/server";
import { getProductById } from "@/api/products";
import { formatMoney } from "@/utils/money";

type OgProps = {
	params: {
		id: string;
	};
};
export const runtime = "edge";

export const alt = "X-Dog - not the site you are thinking of.";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function og({ params }: OgProps) {
	const product = await getProductById(params.id);

	return new ImageResponse(
		(
			<div tw="flex flex-row w-full bg-white h-full items-center justify-center text-8xl">
				<div tw="flex w-[30%]">
					<img tw="rounded-md" width="300px" src={product.image} />
				</div>
				<div tw="flex flex-col ml-6 w-[60%]">
					<p tw="font-sans uppercase m-0 p-0 font-bold text-[30px]">{product.name}</p>
					<p tw="font-serif m-0 p-0 mt-2 font-bold text-[20px]">{formatMoney(product.price)}</p>
					<p tw="m-0 mt-2 text-[16px]">{product.description}</p>
				</div>
			</div>
		),
	);
}
