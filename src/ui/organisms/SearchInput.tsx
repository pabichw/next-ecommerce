"use client";

import { Route } from "next";
import { useRouter } from "next/navigation";
import { debounce } from "radash";
import { ChangeEvent } from "react";

import TextField from "../atoms/TextField";

export function SearchInput() {
	// eslint-disable-next-line @typescript-eslint/unbound-method
	const { push } = useRouter();

	const handleSearch = (input: ChangeEvent<HTMLInputElement>) => {
		push(`/search?query=${input.target.value}` as Route);
	};

	const debouncedHandleSearch = debounce({ delay: 500 }, handleSearch);

	return (
		<div>
			<TextField placeholder="Search..." onChange={debouncedHandleSearch} />
		</div>
	);
}
