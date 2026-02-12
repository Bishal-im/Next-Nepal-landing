import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nest Nepal - Google Workspace Solutions",
  description:
    "Get Google Workspace for your business at the best price in Nepal",
  keywords: "Google Workspace, Nepal, Business Email, Cloud Storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
