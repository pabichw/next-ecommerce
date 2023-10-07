import { ChangeEvent } from "react";

type SelectInputProps = {
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	placeholder: string;
	id?: string;
	defaultValue?: string;
	children: React.ReactNode;
};

function SelectInput({ id, defaultValue, onChange, placeholder, children }: SelectInputProps) {
	return (
		<>
			<select
				id={id}
				className="p-2 rounded-md border border-gray-200"
				value={defaultValue}
				placeholder={placeholder}
				onChange={onChange}
			>
				{children}
			</select>
		</>
	);
}

export default SelectInput;
