import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import PromoBar from "@/components/layout/PromoBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Triad UCity Apartments | Luxury Living in Philadelphia",
  description:
    "Discover Triad Ucity Apartments  a collection of premium residences in the heart of Philadelphia, offering refined architecture, curated amenities, and timeless design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <PromoBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}