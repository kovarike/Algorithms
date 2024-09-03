import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algorithms | Engineering",
  description:
    "Explore the world of engineering and technology with Algorithms. We provide articles, analyses, and updates on the latest innovations, trends, and techniques in engineering, computing, and data science. Stay informed and expand your knowledge with our specialized content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
