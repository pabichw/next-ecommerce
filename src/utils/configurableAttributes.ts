import { ConfigurableAttribute } from "@/types";

export const attributesBlobToAttributes = (
	attributesBlob: string,
): ConfigurableAttribute[] | null => {
	if (!attributesBlob) {
		return null;
	}

	const parsed = JSON.parse(attributesBlob) as ConfigurableAttribute[];

	if (parsed.length === 0) {
		return [];
	}

	return parsed;
};

export const attributesToAttributesBlob = (attributes: ConfigurableAttribute[]): string => {
	return JSON.stringify(attributes);
};
