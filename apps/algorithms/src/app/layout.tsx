import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algorithms | Engineering",
  description:
    "Explore the world of engineering and technology with Algorithms. We provide articles, analyses, and updates on the latest innovations, trends, and techniques in engineering, computing, and data science. Stay informed and expand your knowledge with our specialized content.",
  openGraph: {
    title: "Algorithms | Engineering",
    description:
      "Explore the world of engineering and technology with Algorithms. Stay informed on the latest trends in engineering, computing, and data science.",
    url: "https://algorithmss.com.br",
    siteName: "Algorithms",
    images: [
      {
        url: `https://algorithmss.com.br/logo.png`, // Substitua pela URL da imagem
        width: 800,
        height: 600,
        alt: "Algorithms Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@algorithms",
    title: "Algorithms | Engineering",
    description:
      "Stay informed with the latest trends in engineering, computing, and data science.",
    images: `https://algorithmss.com.br/twitter-logo.png`, // Substitua pela URL da imagem
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo.png" type="image/png" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Danilo Silva" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Algorithms | Engineering" />
        <meta
          property="og:description"
          content="Explore the world of engineering and technology with Algorithms."
        />
        <meta
          property="og:image"
          content={`https://algorithmss.com.br/logo.png`}
        />
        <meta property="og:url" content="https://algorithmss.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Algorithms | Engineering" />
        <meta
          name="twitter:description"
          content="Stay informed with the latest trends in engineering."
        />
        <meta
          name="twitter:image"
          content={`https://algorithmss.com.br/twitter-logo.png`}
        />
        <link rel="canonical" href="https://algorithmss.com.br" />
      </head>

      <body className={`${inter.className} bg-zinc-950 h-screen`}>{children}</body>
    </html>
  );
}
