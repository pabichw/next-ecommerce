"use client";

import { Route } from "next";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Product } from "@/gql/graphql";
import { ConfigurableAttribute } from "@/types";
import { attributesBlobToAttributes } from "@/utils/configurableAttributes";

type ProductConfiguratorProps = {
	product: Product;
};

enum AttributeTypes {
	NUMBER,
	COLOR,
	UNKNOWN,
}

function AttributeValue({
	onClick,
	value,
	name,
}: {
	onClick: (value: string) => void;
	value: string;
	name: string;
}) {
	const getType = (value: string): AttributeTypes => {
		if (!isNaN(Number(value))) {
			return AttributeTypes.NUMBER;
		}

		if (["red", "blue", "green"].includes(value) || value.includes("#")) {
			return AttributeTypes.COLOR;
		}

		return AttributeTypes.UNKNOWN;
	};

	const isActive = window.location.search.includes(`${name}%3A${value}`);
	const type = getType(value);

	return (
		<div
			className={twMerge(
				"min-h-full min-w-12 cursor-pointer border-slate-200 border-2 rounded-md hover:border-sky-300 transition-colors px-2",
				type === AttributeTypes.COLOR && "w-10 h-10 ",
				isActive && "border-sky-600",
			)}
			style={{
				...(type === AttributeTypes.COLOR ? { background: value } : {}),
			}}
			onClick={(): void => {
				onClick(value);
			}}
		>
			{type !== AttributeTypes.COLOR && value}
		</div>
	);
}

function ConfiguratorAttribute({
	attribute,
	onValueSet,
}: {
	attribute: ConfigurableAttribute;
	onValueSet: ({ name, value }: { name: string; value: string }) => void;
}) {
	return (
		<div>
			<h4 className="font-bold text-md">{attribute.name}</h4>
			<div className="flex gap-2">
				{attribute.values.map((attrValue) => (
					<AttributeValue
						key={`attr-${attribute.name}-${attrValue}`}
						name={attribute.name}
						value={attrValue}
						onClick={(value) => {
							onValueSet({ name: attribute.name, value });
						}}
					/>
				))}
			</div>
		</div>
	);
}

function ProductConfigurator({ product }: ProductConfiguratorProps) {
	// eslint-disable-next-line @typescript-eslint/unbound-method
	const { push } = useRouter();

	if (!product.configurableAttributes) {
		return null;
	}

	const handleAttributeChange = ({ name, value }: { name: string; value: string }) => {
		const searchQuery = window.location.search;

		if (!searchQuery) {
			push((window.location.pathname + `?attr=${name}%3A${value},`) as Route);
			return;
		}

		const matchValueRegExp = new RegExp(`(?<=${name}\%3A)(.*?,)`, "i");
		const finalSearchQuery = searchQuery.includes(name)
			? searchQuery.replace(matchValueRegExp, `${value},`)
			: `${searchQuery}${name}%3A${value},`; // slightly naive

		push((window.location.pathname + finalSearchQuery) as Route);
	};

	return (
		<div className="flex flex-col gap-4 bg-white rounded-md p-3">
			{attributesBlobToAttributes(product.configurableAttributes)?.map((attribute) => (
				<ConfiguratorAttribute
					key={`attr-${attribute.name}`}
					attribute={attribute}
					onValueSet={handleAttributeChange}
				/>
			))}
		</div>
	);
}

export default ProductConfigurator;
