import { type MouseEvent, type ReactNode } from "react";

type TouchableProps = {
	children: ReactNode;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

function Touchable({ children, onClick }: TouchableProps) {
	return (
		<button
			className="
      relative z-1
      after:content-[' * '] after:block after:center-absolute after:absolute after:inset-0 after:z-[-1]
      after:inline-block after:min-w-full after:min-h-full after:p-4 after:rounded-full after:transition-colors
      hover:after:bg-neutral-300"
			onClick={onClick && onClick}
		>
			{children}
		</button>
	);
}

export default Touchable;
