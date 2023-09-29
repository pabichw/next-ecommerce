export const slugToName = (slug: string): string => {
	let result = slug.replaceAll("-", " ");
	result = result.charAt(0).toUpperCase() + result.slice(1);
	return result;
};

export const nameToSlug = (name: string): string => {
	const result = name.replaceAll(" ", "-").toLowerCase();
	return result;
};
