import { MetadataRoute } from "next";
import { RESIDENCES } from "@/lib/constants";

/**
 * Sitemap — tells Google about all your pages.
 * Accessible at: yoursite.com/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://serpentineapts.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic residence pages
  const residencePages: MetadataRoute.Sitemap = RESIDENCES.map(
    (residence) => ({
      url: `${baseUrl}/properties/${residence.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })
  );

  return [...staticPages, ...residencePages];
}