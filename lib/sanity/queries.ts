import { sanityClient } from "./client";

export async function getResidences() {
  return sanityClient.fetch(
    `*[_type == "residence"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      tagline,
      category,
      type,
      sqft,
      priceFrom,
      description,
      longDescription,
      "image": mainImage.asset->url,
      "gallery": gallery[].asset->url,
      features,
      "floorPlan": floorPlan.asset->url,
    }`
  );
}

export async function getResidenceBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "residence" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      tagline,
      category,
      type,
      sqft,
      priceFrom,
      description,
      longDescription,
      "image": mainImage.asset->url,
      "gallery": gallery[].asset->url,
      features,
      "floorPlan": floorPlan.asset->url,
    }`,
    { slug }
  );
}

export async function getAmenities() {
  return sanityClient.fetch(
    `*[_type == "amenity"] | order(order asc) {
      _id,
      title,
      icon,
      description,
    }`
  );
}

export async function getGalleryImages(category?: string) {
  const filter = category
    ? `*[_type == "galleryImage" && category == $category]`
    : `*[_type == "galleryImage"]`;

  return sanityClient.fetch(
    `${filter} | order(order asc) {
      _id,
      caption,
      "src": image.asset->url,
      alt,
      category,
      size,
    }`,
    category ? { category } : {}
  );
}

export async function getSiteSettings() {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0] {
      siteName,
      tagline,
      heroEyebrow,
      heroTitle,
      heroDescription,
      "heroImage": heroImage.asset->url,
      heroImageAlt,
      address,
      phone,
      email,
      promoBarEnabled,
      promoBarMessage,
      promoBarLink,
      promoBarHref,
    }`
  );
}