import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Serpentine")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),

      S.divider(),

      S.listItem()
        .title("Residences")
        .schemaType("residence")
        .child(
          S.documentTypeList("residence").title("All Residences")
        ),

      S.listItem()
        .title("Amenities")
        .schemaType("amenity")
        .child(
          S.documentTypeList("amenity").title("All Amenities")
        ),

      S.listItem()
        .title("Gallery")
        .schemaType("galleryImage")
        .child(
          S.documentTypeList("galleryImage").title("Gallery Images")
        ),
    ]);