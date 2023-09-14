export type Product = {
	id: string;
	name: string;
	category: string;
	coverImage: Image;
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
