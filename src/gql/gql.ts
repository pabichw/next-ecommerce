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
    "mutation addToCart($id: ID!, $productId: ID!, $quantity: Int!, $configurableAttributes: String) {\n  addToCart(\n    id: $id\n    productId: $productId\n    quantity: $quantity\n    configurableAttributes: $configurableAttributes\n  ) {\n    id\n    items {\n      id\n      quantity\n      configurableAttributes\n      product {\n        id\n        name\n        configurableAttributes\n        price\n        image\n      }\n    }\n  }\n}": types.AddToCartDocument,
    "query getOrCreateCart($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      id\n      quantity\n      configurableAttributes\n      product {\n        name\n        id\n        configurableAttributes\n        price\n        image\n      }\n    }\n  }\n}": types.GetOrCreateCartDocument,
    "query CategoryGet($slug: String, $pagination: PaginationInput!) {\n  category(slug: $slug, pagination: $pagination) {\n    data {\n      id\n      name\n      slug\n      product {\n        id\n        name\n        price\n        image\n        reviewAvg\n      }\n    }\n    pagination {\n      pages\n      total\n    }\n  }\n}": types.CategoryGetDocument,
    "query CategoryGetList($pagination: PaginationInput!) {\n  category(pagination: $pagination) {\n    data {\n      id\n      name\n      slug\n    }\n    pagination {\n      pages\n      total\n    }\n  }\n}": types.CategoryGetListDocument,
    "query CollectionGet($name: String) {\n  collection(name: $name) {\n    id\n    name\n    product {\n      id\n      name\n      image\n      price\n      reviewAvg\n    }\n  }\n}": types.CollectionGetDocument,
    "query CollectionsGetList {\n  collection {\n    id\n    name\n  }\n}": types.CollectionsGetListDocument,
    "mutation UpdateOrderOwnership($orderId: ID!, $userId: String, $userEmail: String) {\n  updateOrderOwnership(orderId: $orderId, userId: $userId, userEmail: $userEmail) {\n    id\n  }\n}": types.UpdateOrderOwnershipDocument,
    "mutation UpdateOrderStatus($orderId: ID!, $status: String!) {\n  updateOrderStatus(orderId: $orderId, status: $status) {\n    id\n  }\n}": types.UpdateOrderStatusDocument,
    "query OrderGetList($userId: ID) {\n  order(userId: $userId) {\n    id\n    status\n    items {\n      configurableAttributes\n      product {\n        name\n      }\n      quantity\n    }\n  }\n}": types.OrderGetListDocument,
    "query ProductGet($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    price\n    image\n    description\n    configurableAttributes\n    category {\n      name\n      slug\n    }\n    relatedProduct {\n      id\n      name\n      image\n      price\n    }\n    reviews {\n      headline\n      content\n      rating\n      name\n      email\n    }\n    reviewAvg\n  }\n}": types.ProductGetDocument,
    "query ProductsGetList($name: String, $pagination: PaginationInput, $sorting: String) {\n  product(name: $name, pagination: $pagination, sorting: $sorting) {\n    id\n    name\n    price\n    image\n    category {\n      name\n    }\n    reviewAvg\n  }\n}": types.ProductsGetListDocument,
    "mutation createReview($productId: ID!, $reviewInput: ReviewInput!) {\n  insertReview(product: $productId, review: $reviewInput) {\n    id\n    name\n  }\n}": types.CreateReviewDocument,
    "mutation UpdateOrderItemQty($orderId: ID, $orderItemId: ID!, $quantity: Int!) {\n  updateOrderItemQty(\n    orderId: $orderId\n    orderItemId: $orderItemId\n    quantity: $quantity\n  ) {\n    id\n    quantity\n    product {\n      name\n    }\n  }\n}": types.UpdateOrderItemQtyDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation addToCart($id: ID!, $productId: ID!, $quantity: Int!, $configurableAttributes: String) {\n  addToCart(\n    id: $id\n    productId: $productId\n    quantity: $quantity\n    configurableAttributes: $configurableAttributes\n  ) {\n    id\n    items {\n      id\n      quantity\n      configurableAttributes\n      product {\n        id\n        name\n        configurableAttributes\n        price\n        image\n      }\n    }\n  }\n}"): typeof import('./graphql').AddToCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getOrCreateCart($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      id\n      quantity\n      configurableAttributes\n      product {\n        name\n        id\n        configurableAttributes\n        price\n        image\n      }\n    }\n  }\n}"): typeof import('./graphql').GetOrCreateCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGet($slug: String, $pagination: PaginationInput!) {\n  category(slug: $slug, pagination: $pagination) {\n    data {\n      id\n      name\n      slug\n      product {\n        id\n        name\n        price\n        image\n        reviewAvg\n      }\n    }\n    pagination {\n      pages\n      total\n    }\n  }\n}"): typeof import('./graphql').CategoryGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetList($pagination: PaginationInput!) {\n  category(pagination: $pagination) {\n    data {\n      id\n      name\n      slug\n    }\n    pagination {\n      pages\n      total\n    }\n  }\n}"): typeof import('./graphql').CategoryGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGet($name: String) {\n  collection(name: $name) {\n    id\n    name\n    product {\n      id\n      name\n      image\n      price\n      reviewAvg\n    }\n  }\n}"): typeof import('./graphql').CollectionGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collection {\n    id\n    name\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateOrderOwnership($orderId: ID!, $userId: String, $userEmail: String) {\n  updateOrderOwnership(orderId: $orderId, userId: $userId, userEmail: $userEmail) {\n    id\n  }\n}"): typeof import('./graphql').UpdateOrderOwnershipDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateOrderStatus($orderId: ID!, $status: String!) {\n  updateOrderStatus(orderId: $orderId, status: $status) {\n    id\n  }\n}"): typeof import('./graphql').UpdateOrderStatusDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrderGetList($userId: ID) {\n  order(userId: $userId) {\n    id\n    status\n    items {\n      configurableAttributes\n      product {\n        name\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').OrderGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGet($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    price\n    image\n    description\n    configurableAttributes\n    category {\n      name\n      slug\n    }\n    relatedProduct {\n      id\n      name\n      image\n      price\n    }\n    reviews {\n      headline\n      content\n      rating\n      name\n      email\n    }\n    reviewAvg\n  }\n}"): typeof import('./graphql').ProductGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($name: String, $pagination: PaginationInput, $sorting: String) {\n  product(name: $name, pagination: $pagination, sorting: $sorting) {\n    id\n    name\n    price\n    image\n    category {\n      name\n    }\n    reviewAvg\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createReview($productId: ID!, $reviewInput: ReviewInput!) {\n  insertReview(product: $productId, review: $reviewInput) {\n    id\n    name\n  }\n}"): typeof import('./graphql').CreateReviewDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateOrderItemQty($orderId: ID, $orderItemId: ID!, $quantity: Int!) {\n  updateOrderItemQty(\n    orderId: $orderId\n    orderItemId: $orderItemId\n    quantity: $quantity\n  ) {\n    id\n    quantity\n    product {\n      name\n    }\n  }\n}"): typeof import('./graphql').UpdateOrderItemQtyDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
