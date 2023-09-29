import { ChangeEvent } from "react";

type TextFieldProps = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	role?: string;
};

function TextField({ onChange, placeholder, role }: TextFieldProps) {
	return (
		<input
			className="border-[1px] text-sm border-slate-200 p-2 rounded-sm"
			role={role}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
}

export default TextField;
