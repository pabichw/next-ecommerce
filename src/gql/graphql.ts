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
  slug: Scalars['String']['output'];
};

export type Query = {
  category?: Maybe<CategoryWithPagination>;
  collection: Array<Maybe<Collection>>;
  product: Array<Maybe<Product>>;
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
};

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

export type ProductGetQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetQuery = { product: Array<{ id: string, name: string, price: number, image: string, description: string, configurableAttributes?: string | null, category?: Array<{ name: string, slug: string } | null> | null } | null> };

export type ProductsGetListQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  pagination: PaginationInput;
}>;


export type ProductsGetListQuery = { product: Array<{ id: string, name: string, price: number, image: string, category?: Array<{ name: string } | null> | null } | null> };

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
  }
}
    `) as unknown as TypedDocumentString<ProductGetQuery, ProductGetQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($name: String, $pagination: PaginationInput!) {
  product(name: $name, pagination: $pagination) {
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