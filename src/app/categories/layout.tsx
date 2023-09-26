import { ReactNode } from "react";

type CategoriesPageLayoutProps = {
	children: ReactNode;
};

function CategoriesPageLayout({ children }: CategoriesPageLayoutProps) {
	return <>{children}</>;
}

export default CategoriesPageLayout;
