import { BoneIcon } from "lucide-react";

export function AddToCart() {
	return (
		<button
			className="py-2 px-3 inline-flex gap-3 font-bold bg-sky-400 hover:bg-sky-500 bold transition-colors text-neutral-50 rounded-md"
			type="submit"
		>
			<BoneIcon /> Add to cart
		</button>
	);
}
