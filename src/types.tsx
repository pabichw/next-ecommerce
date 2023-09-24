import { type TypedDocumentString } from "@/gql/graphql";

export type GraphQLResponse<T> =
  | { data?: undefined; errors: { message: string }[] }
  | { data: T; errors?: undefined };

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  price: Money;
};

export type Image = {
  src: string;
  alt: string;
};

export type Money = {
  value: number;
  currency: string;
};
