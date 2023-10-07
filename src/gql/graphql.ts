/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  product?: Maybe<Array<Maybe<Product>>>;
  slug: Scalars['String']['output'];
};

export type CategoryWithPagination = {
  data: Array<Category>;
  pagination?: Maybe<Pagination>;
};

export type Collection = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  product?: Maybe<Array<Maybe<Product>>>;
};

export type Mutation = {
  addToCart?: Maybe<Order>;
  insertReview?: Maybe<Review>;
  updateOrderItemQty?: Maybe<OrderItem>;
  upsertProduct?: Maybe<Product>;
};


export type MutationAddToCartArgs = {
  configurableAttributes?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationInsertReviewArgs = {
  product: Scalars['ID']['input'];
  review: ReviewInput;
};


export type MutationUpdateOrderItemQtyArgs = {
  orderId?: InputMaybe<Scalars['ID']['input']>;
  orderItemId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationUpsertProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  product: ProductUpsertInput;
};

export type Order = {
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<OrderItem>>>;
  status?: Maybe<Scalars['String']['output']>;
  userConnection?: Maybe<Scalars['String']['output']>;
};

export type OrderItem = {
  configurableAttributes?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  product?: Maybe<Product>;
  quantity: Scalars['Int']['output'];
};

export type Pagination = {
  pages: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationInput = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};

export type Product = {
  category?: Maybe<Array<Maybe<Category>>>;
  collection?: Maybe<Array<Maybe<Collection>>>;
  configurableAttributes?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  relatedProduct?: Maybe<Array<Maybe<Product>>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  slug: Scalars['String']['output'];
};

export type ProductUpsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  cart?: Maybe<Order>;
  category?: Maybe<CategoryWithPagination>;
  collection: Array<Maybe<Collection>>;
  product: Array<Maybe<Product>>;
};


export type QueryCartArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCategoryArgs = {
  pagination?: InputMaybe<PaginationInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  sorting?: InputMaybe<Scalars['String']['input']>;
};

export type Review = {
  content: Scalars['String']['output'];
  email: Scalars['String']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
};

export type ReviewInput = {
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  headline: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};

export type AddToCartMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  configurableAttributes?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddToCartMutation = { addToCart?: { id: string, items?: Array<{ id: string, quantity: number, product?: { id: string, name: string, configurableAttributes?: string | null, price: number, image: string } | null } | null> | null } | null };

export type GetOrCreateCartQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetOrCreateCartQuery = { cart?: { id: string, items?: Array<{ id: string, quantity: number, product?: { name: string, id: string, configurableAttributes?: string | null, price: number, image: string } | null } | null> | null } | null };

export type CategoryGetQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  pagination: PaginationInput;
}>;


export type CategoryGetQuery = { category?: { data: Array<{ id: string, name: string, slug: string, product?: Array<{ id: string, name: string, price: number, image: string } | null> | null }>, pagination?: { pages: number, total: number } | null } | null };

export type CategoryGetListQueryVariables = Exact<{
  pagination: PaginationInput;
}>;


export type CategoryGetListQuery = { category?: { data: Array<{ id: string, name: string, slug: string, product?: Array<{ name: string, id: string, slug: string } | null> | null }>, pagination?: { pages: number, total: number } | null } | null };

export type CollectionGetQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type CollectionGetQuery = { collection: Array<{ id: string, name: string, product?: Array<{ id: string, name: string, image: string, price: number } | null> | null } | null> };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collection: Array<{ id: string, name: string, product?: Array<{ id: string, name: string, image: string, price: number } | null> | null } | null> };

export type ProductGetQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetQuery = { product: Array<{ id: string, name: string, price: number, image: string, description: string, configurableAttributes?: string | null, category?: Array<{ name: string, slug: string } | null> | null, relatedProduct?: Array<{ id: string, name: string, image: string, price: number } | null> | null, reviews?: Array<{ headline: string, content: string, rating: number, name: string, email: string } | null> | null } | null> };

export type ProductsGetListQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  sorting?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetListQuery = { product: Array<{ id: string, name: string, price: number, image: string, category?: Array<{ name: string } | null> | null } | null> };

export type CreateReviewMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  reviewInput: ReviewInput;
}>;


export type CreateReviewMutation = { insertReview?: { id: string, name: string } | null };

export type UpdateOrderItemQtyMutationVariables = Exact<{
  orderId?: InputMaybe<Scalars['ID']['input']>;
  orderItemId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type UpdateOrderItemQtyMutation = { updateOrderItemQty?: { id: string, quantity: number, product?: { name: string } | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const AddToCartDocument = new TypedDocumentString(`
    mutation addToCart($id: ID!, $productId: ID!, $quantity: Int!, $configurableAttributes: String) {
  addToCart(
    id: $id
    productId: $productId
    quantity: $quantity
    configurableAttributes: $configurableAttributes
  ) {
    id
    items {
      id
      quantity
      product {
        id
        name
        configurableAttributes
        price
        image
      }
    }
  }
}
    `) as unknown as TypedDocumentString<AddToCartMutation, AddToCartMutationVariables>;
export const GetOrCreateCartDocument = new TypedDocumentString(`
    query getOrCreateCart($id: ID!) {
  cart(id: $id) {
    id
    items {
      id
      quantity
      product {
        name
        id
        configurableAttributes
        price
        image
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetOrCreateCartQuery, GetOrCreateCartQueryVariables>;
export const CategoryGetDocument = new TypedDocumentString(`
    query CategoryGet($slug: String, $pagination: PaginationInput!) {
  category(slug: $slug, pagination: $pagination) {
    data {
      id
      name
      slug
      product {
        id
        name
        price
        image
      }
    }
    pagination {
      pages
      total
    }
  }
}
    `) as unknown as TypedDocumentString<CategoryGetQuery, CategoryGetQueryVariables>;
export const CategoryGetListDocument = new TypedDocumentString(`
    query CategoryGetList($pagination: PaginationInput!) {
  category(pagination: $pagination) {
    data {
      id
      name
      slug
      product {
        name
        id
        slug
      }
    }
    pagination {
      pages
      total
    }
  }
}
    `) as unknown as TypedDocumentString<CategoryGetListQuery, CategoryGetListQueryVariables>;
export const CollectionGetDocument = new TypedDocumentString(`
    query CollectionGet($name: String) {
  collection(name: $name) {
    id
    name
    product {
      id
      name
      image
      price
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionGetQuery, CollectionGetQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collection {
    id
    name
    product {
      id
      name
      image
      price
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const ProductGetDocument = new TypedDocumentString(`
    query ProductGet($id: ID!) {
  product(id: $id) {
    id
    name
    price
    image
    description
    configurableAttributes
    category {
      name
      slug
    }
    relatedProduct {
      id
      name
      image
      price
    }
    reviews {
      headline
      content
      rating
      name
      email
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetQuery, ProductGetQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($name: String, $pagination: PaginationInput, $sorting: String) {
  product(name: $name, pagination: $pagination, sorting: $sorting) {
    id
    name
    price
    image
    category {
      name
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const CreateReviewDocument = new TypedDocumentString(`
    mutation createReview($productId: ID!, $reviewInput: ReviewInput!) {
  insertReview(product: $productId, review: $reviewInput) {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<CreateReviewMutation, CreateReviewMutationVariables>;
export const UpdateOrderItemQtyDocument = new TypedDocumentString(`
    mutation UpdateOrderItemQty($orderId: ID, $orderItemId: ID!, $quantity: Int!) {
  updateOrderItemQty(
    orderId: $orderId
    orderItemId: $orderItemId
    quantity: $quantity
  ) {
    id
    quantity
    product {
      name
    }
  }
}
    `) as unknown as TypedDocumentString<UpdateOrderItemQtyMutation, UpdateOrderItemQtyMutationVariables>;