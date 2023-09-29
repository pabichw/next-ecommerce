export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export type ConfigurableAttribute = {
	name: string;
	values: string[];
};

export type PaginatedResource<T> = {
	data: Array<T>;
	pagination: {
		page: number;
		pages: number;
		total: number;
	};
};
