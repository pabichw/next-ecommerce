export type Product = {
	name: string;
	coverImage: Image;
	price: Money;
};

export type Image = {
	src: string;
	alt: string;
};

export type Money = {
	value: number;
};
