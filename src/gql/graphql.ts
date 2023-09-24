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

export type Pagination = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};

export type Product = {
  category?: Maybe<Array<Maybe<Category>>>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
};

export type Query = {
  category: Array<Maybe<Category>>;
  product: Array<Maybe<Product>>;
};


export type QueryCategoryArgs = {
  pagination?: InputMaybe<Pagination>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<Pagination>;
};

export type CategoryGetQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  pagination: Pagination;
}>;


export type CategoryGetQuery = { category: Array<{ id: string, name: string, slug: string, product?: Array<{ id: string, name: string, price: number, image: string } | null> | null } | null> };

export type CategoryGetListQueryVariables = Exact<{
  pagination: Pagination;
}>;


export type CategoryGetListQuery = { category: Array<{ id: string, name: string, slug: string } | null> };

export type ProductGetQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetQuery = { product: Array<{ id: string, name: string, price: number, image: string, category?: Array<{ name: string, slug: string } | null> | null } | null> };

export type ProductsGetListQueryVariables = Exact<{
  pagination: Pagination;
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
    query CategoryGet($slug: String, $pagination: Pagination!) {
  category(slug: $slug, pagination: $pagination) {
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
}
    `) as unknown as TypedDocumentString<CategoryGetQuery, CategoryGetQueryVariables>;
export const CategoryGetListDocument = new TypedDocumentString(`
    query CategoryGetList($pagination: Pagination!) {
  category(pagination: $pagination) {
    id
    name
    slug
  }
}
    `) as unknown as TypedDocumentString<CategoryGetListQuery, CategoryGetListQueryVariables>;
export const ProductGetDocument = new TypedDocumentString(`
    query ProductGet($id: ID!) {
  product(id: $id) {
    id
    name
    price
    image
    category {
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetQuery, ProductGetQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($pagination: Pagination!) {
  product(pagination: $pagination) {
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