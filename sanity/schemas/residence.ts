import { defineField, defineType } from "sanity";

export const residenceSchema = defineType({
  name: "residence",
  title: "Residence",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Studio", value: "studio" },
          { title: "1 Bedroom", value: "one-bedroom" },
          { title: "2 Bedroom", value: "two-bedroom" },
          { title: "3 Bedroom", value: "three-bedroom" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type Label",
      type: "string",
    }),
    defineField({
      name: "sqft",
      title: "Square Footage",
      type: "string",
    }),
    defineField({
      name: "priceFrom",
      title: "Starting Price",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "longDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "floorPlan",
      title: "Floor Plan Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "priceFrom",
      media: "mainImage",
    },
  },
});