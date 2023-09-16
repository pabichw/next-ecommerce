"use client";

import { User } from "lucide-react";
import Touchable from "@/ui/atoms/Touchable";

function Auth() {
	const onClick = (): void => {
		console.log("click");
	};

	return (
		<Touchable onClick={onClick}>
			<User size={20} strokeWidth={2} />
		</Touchable>
	);
}

export default Auth;
