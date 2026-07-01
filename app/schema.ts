/**
 * Schema markup helpers — structured data for Google.
 * Returns JSON-LD objects for different page types.
 */

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Triad UCity Apartments",
    description:
      "40 newly constructed luxury residences on Lancaster Avenue in Philadelphia. Studios, 1, and 2 bedroom floor plans.",
    url: "https://triaducity.com",
    telephone: "+12676168870",
    email: "group@vicintas.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3748 Lancaster Avenue",
      addressLocality: "Philadelphia",
      addressRegion: "PA",
      postalCode: "19104",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.9609",
      longitude: "-75.1981",
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
      { "@type": "LocationFeatureSpecification", name: "Gym", value: true },
      { "@type": "LocationFeatureSpecification", name: "Co-working", value: true },
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
    name: `${residence.name} — Triad UCity Apartments`,
    description: residence.description,
    url: `https://triaducity.com/properties/${residence.slug}`,
    containedInPlace: {
      "@type": "ApartmentComplex",
      name: "Triad UCity Apartments",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3748 Lancaster Avenue",
        addressLocality: "Philadelphia",
        addressRegion: "PA",
        postalCode: "19104",
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