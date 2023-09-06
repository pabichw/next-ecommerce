type Product = {
	name: string;
	coverImage: Image;
	price: Money;
};

type Image = {
	src: string;
	alt: string;
};

type Money = {
	value: number;
};
