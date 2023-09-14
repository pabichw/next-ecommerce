import { ReactNode } from "react";

type ProductLayoutProps = {
  children: ReactNode;
};

export function generateStaticParams() {
  return Array.from({ length: 10 }).map((_, idx) => ({ page: idx.toString() }));
}

function ProductsLayout({ children }: ProductLayoutProps) {
  return <>{children}</>;
}

export default ProductsLayout;
