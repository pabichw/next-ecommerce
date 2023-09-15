"use client";

import { ShoppingCart } from "lucide-react";

import Touchable from "../atoms/Touchable";

function Minicart() {
	const onClick = (): void => {
		console.log("click");
	};

	return (
		<Touchable onClick={onClick}>
			<ShoppingCart size={20} strokeWidth={2} />
		</Touchable>
	);
}

export default Minicart;
