import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/ui/organisms/Navbar";
import Footer from "@/ui/organisms/Footer";
import { getCategories } from "@/api/categories";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next Shop",
	description: "Your goto shop for shopping.",
};

export default async function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	const categories = await getCategories({ page: 1, pageSize: 10 });

	return (
		<ClerkProvider>
			<html lang="en">
				<Analytics />
				<body className={inter.className}>
					<Navbar
						categories={categories?.data?.map((category) => ({
							url: `/categories/${category.slug}`,
							label: category.name,
						}))}
					/>
					{children}
					<Footer />
					{modal}
				</body>
			</html>
		</ClerkProvider>
	);
}
