import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/ui/organisms/Navbar";
import Footer from "@/ui/organisms/Footer";

import "./globals.css";
import { getCategories } from "@/api/categories";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Shop",
  description: "Your goto shop for shopping.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const categories = await getCategories({ page: 1, pageSize: 10 });

  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>
        <Navbar categories={categories.map(category => ({ url: `/categories/${category.slug}`, label: category.name }))} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
