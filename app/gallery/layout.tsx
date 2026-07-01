import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://triaducity.com"),

  title: {
    default: "Triad UCity Apartments | Luxury Living in Philadelphia",
    template: "%s | Triad UCity Apartments",
  },

  description:
    "Triad Apartments offers 40 newly constructed luxury residences on Lancaster Avenue in Philadelphia. Studios, 1, and 3 bedroom floor plans from $1,700/mo.",

  keywords: [
    "luxury apartments Philadelphia",
    "apartments Lancaster Avenue Philadelphia",
    "Philadelphia apartments for rent",
    "University City apartments",
    "apartments near Drexel University",
    "studio apartments Philadelphia",
    "1 bedroom apartments Philadelphia",
    "2 bedroom apartments Philadelphia",
    "newly constructed apartments Philadelphia",
    "Triad Apartments",
    //"3 bedroom apartments Philadelphia",
    "1 month free rent Philadelphia",
    "Apartments for students Philadelphia", 
    "Apartmetns with good amenities Philadelphia", 
    "Rooftop apartements Philadelphia",
    "apartments near UPenn Philadelphia",
  ],

  authors: [{ name: "Triad UCity Apartments" }],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://triaducity.com",
    siteName: "Triad UCity Apartments",
    title: "Triad UCity Apartments | Luxury Living in Philadelphia",
    description:
      "40 newly constructed luxury residences on Lancaster Avenue, Philadelphia. Studios to 2-bedroom floor plans from $1,700/mo.",
    images: [
      {
        url: "/images/home/finalctatriad.jpg",
        width: 1200,
        height: 630,
        alt: "Triad UCity Apartments — Luxury Living in Philadelphia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Triad UCity Apartments | Luxury Living in Philadelphia",
    description:
      "40 newly constructed luxury residences on Lancaster Avenue, Philadelphia.",
    images: ["/images/home/finalctatriad.jpg"],
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