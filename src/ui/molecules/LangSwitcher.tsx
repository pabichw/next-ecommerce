"use client";

import { Globe2 } from "lucide-react";
import Touchable from "@/ui/atoms/Touchable";

function LangSwitcher() {
	const onClick = (): void => {
		console.log("click");
	};

	return (
		<Touchable onClick={onClick}>
			<Globe2 size={20} strokeWidth={2} />
		</Touchable>
	);
}

export default LangSwitcher;
