import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";

import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roopsetu.com"),
  title: "RoopSetu — Beauty Inspiration, Beautifully Discovered",
  description:
    "Discover beautiful nail art, hairstyles, makeup, and bridal beauty ideas you'll want to recreate. RoopSetu — your premium beauty inspiration platform.",
  openGraph: {
    title: "RoopSetu — Beauty Inspiration",
    description:
      "Discover nail art, makeup, hairstyles and bridal beauty inspiration.",
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
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}