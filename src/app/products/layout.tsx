import { ReactNode } from "react";

type ProductLayoutProps = {
	children: ReactNode;
};

function ProductsLayout({ children }: ProductLayoutProps) {
	return <>{children}</>;
}

export default ProductsLayout;
