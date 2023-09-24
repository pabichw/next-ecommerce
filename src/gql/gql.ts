/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoryGet($slug: String, $pagination: Pagination!) {\n  category(slug: $slug, pagination: $pagination) {\n    id\n    name\n    slug\n    product {\n      id\n      name\n      price\n      image\n    }\n  }\n}": types.CategoryGetDocument,
    "query CategoryGetList($pagination: Pagination!) {\n  category(pagination: $pagination) {\n    id\n    name\n    slug\n  }\n}": types.CategoryGetListDocument,
    "query ProductGet($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    price\n    image\n    category {\n      name\n      slug\n    }\n  }\n}": types.ProductGetDocument,
    "query ProductsGetList($pagination: Pagination!) {\n  product(pagination: $pagination) {\n    id\n    name\n    price\n    image\n    category {\n      name\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGet($slug: String, $pagination: Pagination!) {\n  category(slug: $slug, pagination: $pagination) {\n    id\n    name\n    slug\n    product {\n      id\n      name\n      price\n      image\n    }\n  }\n}"): typeof import('./graphql').CategoryGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetList($pagination: Pagination!) {\n  category(pagination: $pagination) {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoryGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGet($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    price\n    image\n    category {\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').ProductGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($pagination: Pagination!) {\n  product(pagination: $pagination) {\n    id\n    name\n    price\n    image\n    category {\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
