"use client";

import { Route } from "next";
import { useRouter } from "next/navigation";
import { debounce } from "radash";
import { ChangeEvent, FormEvent } from "react";

import Field from "@/ui/atoms/Field";

export function SearchInput() {
	// eslint-disable-next-line @typescript-eslint/unbound-method
	const { push } = useRouter();

	const handleSearch = (query: string): void => {
		push(`/search?query=${query}` as Route);
	};

	const debouncedHandleSearch = debounce({ delay: 500 }, (e: ChangeEvent<HTMLInputElement>) =>
		handleSearch(e.target.value),
	);

	return (
		<div>
			<form
				onSubmit={(e: FormEvent<HTMLFormElement>) => {
					debugger;
					e.preventDefault();
					/* eslint-disable */
					// @ts-ignore
					handleSearch(e.target[0].value);
					/* eslint-enable */
				}}
			>
				<Field placeholder="Search..." onChange={debouncedHandleSearch} role="searchbox" />
			</form>
		</div>
	);
}
