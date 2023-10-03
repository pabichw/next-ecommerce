import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

type FieldProps = {
	cls?: string;
	defaultValue?: string;
	name?: string;
	placeholder?: string;
	required?: boolean;
	role?: string;
	max?: string;
	min?: string;
	type?: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Field({ cls, type = "text", ...rest }: FieldProps) {
	return (
		<input
			className={twMerge("border-[1px] text-sm border-slate-200 p-2 rounded-sm", cls)}
			type={type}
			{...rest}
		/>
	);
}

export default Field;
