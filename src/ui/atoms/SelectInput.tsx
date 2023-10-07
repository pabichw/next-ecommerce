import { ChangeEvent } from "react";

type SelectInputProps = {
	options: { value: string; label: string }[];
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	placeholder: string;
	id?: string;
	dataTestIdOption?: string;
	defaultValue?: string;
};

function SelectInput({
	id,
	dataTestIdOption,
	options,
	defaultValue,
	onChange,
	placeholder,
}: SelectInputProps) {
	return (
		<>
			<select
				id={id}
				className="p-2 rounded-md border border-gray-200"
				value={defaultValue}
				placeholder={placeholder}
				onChange={onChange}
			>
				<option value="">Default</option>
				{options.map((option, key) => (
					<option key={`option-${key}`} value={option.value} data-testId={dataTestIdOption}>
						{option.label}
					</option>
				))}
			</select>
		</>
	);
}

export default SelectInput;
