import { createClient } from "next-sanity";
import { sanityConfig } from "./config";
import createImageUrlBuilder from "@sanity/image-url";

/**
 * Main Sanity client  used for all data fetching.
 */
export const sanityClient = createClient(sanityConfig);

/**
 * Image URL builder  updated pattern for newer @sanity/image-url versions.
 * Pass config directly instead of client.
 */
const builder = createImageUrlBuilder({
  projectId: sanityConfig.projectId || "",
  dataset: sanityConfig.dataset || "production",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}