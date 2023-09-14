import { ReactNode } from "react";

type ProductPageLayoutProps = {
	children: ReactNode;
};

function ProductsPageLayout({ children }: ProductPageLayoutProps) {
	return <>{children}</>;
}

export default ProductsPageLayout;
