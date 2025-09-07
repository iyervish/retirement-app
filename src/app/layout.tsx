import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RetireWise - Know Exactly When You Can Retire",
  description: "Get a personalized retirement timeline based on your current savings, income, and goals. No generic advice, no scary surprises - just clear answers about your future.",
  keywords: "retirement planning, retirement calculator, financial planning, retirement timeline",
  authors: [{ name: "RetireWise" }],
  openGraph: {
    title: "RetireWise - Know Exactly When You Can Retire",
    description: "Get a personalized retirement timeline based on your current savings, income, and goals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
