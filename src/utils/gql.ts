import { type TypedDocumentString } from "@/gql/graphql";
import { GraphQLResponse } from "@/types";

type Options = {
	tags?: string[];
};

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
	options?: Options,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
		},
		next: {
			tags: options?.tags,
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		console.error("[ERROR]", graphqlResponse.errors);

		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
