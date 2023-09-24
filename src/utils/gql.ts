import { type TypedDocumentString } from "@/gql/graphql";
import { GraphQLResponse } from "@/types";

export const executeGraphql = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables: TVariables,
): Promise<TResult> => {
  if (!process.env.GRAPHQL_URL) {
    throw TypeError("GRAPHQL_URL is not defined");
  }

  console.log(
    query,
    variables
  )

  const res = await fetch(process.env.GRAPHQL_URL, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

  console.log('graphqlResponse', graphqlResponse);
  
  if (graphqlResponse.errors) {
    console.error('[ERROR]', graphqlResponse.errors)

    throw TypeError(`GraphQL Error`, {
      cause: graphqlResponse.errors,
    });
  }

  return graphqlResponse.data;
};
