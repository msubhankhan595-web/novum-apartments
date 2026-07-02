/**
 * Schema markup helpers — structured data for Google.
 * Returns JSON-LD objects for different page types.
 */

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Novum Apartments",
    description:
      "Newly constructed modern residences in Philadelphia designed with quality interiors, thoughtful layouts, and everyday comfort.",
    url: "https://novumapts.com",
    telephone: "+12676168870",
    email: "group@vicintas.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1112 E Berks St.",
      addressLocality: "Philadelphia",
      addressRegion: "PA",
      postalCode: "19125",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.9749",
      longitude: "-75.1296",
    },
    numberOfRooms: 40,
    petsAllowed: true,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "In-Unit Laundry", value: true },
      { "@type": "LocationFeatureSpecification", name: "High-Speed Internet", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bike Storage", value: true },
      { "@type": "LocationFeatureSpecification", name: "Package Room", value: true },
      { "@type": "LocationFeatureSpecification", name: "Controlled Access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
      { "@type": "LocationFeatureSpecification", name: "Modern Kitchens", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rooftop", value: true },
    ],
  };
}

export function getResidenceSchema(residence: {
  name: string;
  description: string;
  priceFrom: string;
  type: string;
  sqft: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: `${residence.name} — Novum Apartments`,
    description: residence.description,
    url: `https://novumapts.com/properties/${residence.slug}`,
    containedInPlace: {
      "@type": "ApartmentComplex",
      name: "Novum Apartments",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1112 E Berks St.",
        addressLocality: "Philadelphia",
        addressRegion: "PA",
        postalCode: "19125",
        addressCountry: "US",
      },
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: residence.sqft,
    },
    numberOfRooms: residence.type.includes("Studio")
      ? 1
      : parseInt(residence.type.charAt(0)),
  };
}