import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nest Nepal - Digital Solutions Company",
  description:
    "Building innovative web and mobile applications that transform businesses. Your trusted partner in digital transformation.",
  keywords: [
    "web development",
    "mobile apps",
    "UI/UX design",
    "Nepal",
    "digital solutions",
  ],
  authors: [{ name: "Nest Nepal" }],
  openGraph: {
    title: "Nest Nepal - Digital Solutions Company",
    description: "Building innovative digital solutions for tomorrow",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
