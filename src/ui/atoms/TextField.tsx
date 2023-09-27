import { ChangeEvent } from "react";

type TextFieldProps = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
};

function TextField({ onChange, placeholder }: TextFieldProps) {
	return (
		<input
			className="border-[1px] text-sm border-slate-200 p-2 rounded-sm"
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
}

export default TextField;
