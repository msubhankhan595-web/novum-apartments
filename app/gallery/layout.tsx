import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://novumapts.com"),

  title: {
    default: "Novum Apartments | Modern Living in Philadelphia",
    template: "%s | Novum Apartments",
  },

  description:
    "Novum Apartments offers newly constructed modern residences in Philadelphia with quality interiors, thoughtful layouts, and everyday comfort.",

  keywords: [
    "luxury apartments Philadelphia",
    "Philadelphia apartments for rent",
    "studio apartments Philadelphia",
    "1 bedroom apartments Philadelphia",
    "2 bedroom apartments Philadelphia",
    "newly constructed apartments Philadelphia",
    "1 month free rent Philadelphia",
    "Apartments for students Philadelphia", 
    "Apartmetns with good amenities Philadelphia", 
    "Novum Apartments", 
    "Fishtown apartments", 
    "Berks Street apartments",
    "Rooftop apartements Philadelphia",
    "Apartments in 19125",
  ],

  authors: [{ name: "Novum Apartments" }],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novumapts.com",
    siteName: "Novum Apartments",
    title: "Novum Apartments | Modern Living in Philadelphia",
    description:
      "Newly constructed modern residences in Philadelphia designed with quality interiors, thoughtful layouts, and everyday comfort.",
    images: [
      {
        url: "/images/home/frontctanovumnew.jpg",
        width: 1200,
        height: 630,
        alt: "Novum Apartments — Modern Living in Philadelphia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Novum Apartments | Modern Living in Philadelphia",
    description:
      "Newly constructed modern residences in Philadelphia designed with quality interiors, thoughtful layouts, and everyday comfort.",
    images: ["/images/home/frontctanovumnew.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}