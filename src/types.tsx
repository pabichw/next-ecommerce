export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export type ConfigurableAttribute = {
	name: string;
	values: string[];
};
