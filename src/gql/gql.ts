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
    "query CategoryGet($slug: String, $pagination: PaginationInput!) {\n  category(slug: $slug, pagination: $pagination) {\n    data {\n      id\n      name\n      slug\n      product {\n        id\n        name\n        price\n        image\n      }\n    }\n    pagination {\n      pages\n      total\n    }\n  }\n}": types.CategoryGetDocument,
    "query CategoryGetList($pagination: PaginationInput!) {\n  category(pagination: $pagination) {\n    data {\n      id\n      name\n      slug\n      product {\n        name\n        id\n        slug\n      }\n    }\n    pagination {\n      pages\n      total\n    }\n  }\n}": types.CategoryGetListDocument,
    "query CollectionGet($name: String) {\n  collection(name: $name) {\n    id\n    name\n    product {\n      id\n      name\n      image\n      price\n    }\n  }\n}": types.CollectionGetDocument,
    "query CollectionsGetList {\n  collection {\n    id\n    name\n    product {\n      id\n      name\n      image\n      price\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGet($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    price\n    image\n    description\n    configurableAttributes\n    category {\n      name\n      slug\n    }\n    relatedProduct {\n      id\n      name\n      image\n      price\n    }\n  }\n}": types.ProductGetDocument,
    "query ProductsGetList($name: String, $pagination: PaginationInput!) {\n  product(name: $name, pagination: $pagination) {\n    id\n    name\n    price\n    image\n    category {\n      name\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGet($slug: String, $pagination: PaginationInput!) {\n  category(slug: $slug, pagination: $pagination) {\n    data {\n      id\n      name\n      slug\n      product {\n        id\n        name\n        price\n        image\n      }\n    }\n    pagination {\n      pages\n      total\n    }\n  }\n}"): typeof import('./graphql').CategoryGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetList($pagination: PaginationInput!) {\n  category(pagination: $pagination) {\n    data {\n      id\n      name\n      slug\n      product {\n        name\n        id\n        slug\n      }\n    }\n    pagination {\n      pages\n      total\n    }\n  }\n}"): typeof import('./graphql').CategoryGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGet($name: String) {\n  collection(name: $name) {\n    id\n    name\n    product {\n      id\n      name\n      image\n      price\n    }\n  }\n}"): typeof import('./graphql').CollectionGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collection {\n    id\n    name\n    product {\n      id\n      name\n      image\n      price\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGet($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    price\n    image\n    description\n    configurableAttributes\n    category {\n      name\n      slug\n    }\n    relatedProduct {\n      id\n      name\n      image\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($name: String, $pagination: PaginationInput!) {\n  product(name: $name, pagination: $pagination) {\n    id\n    name\n    price\n    image\n    category {\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
