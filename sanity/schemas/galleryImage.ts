import { defineField, defineType } from "sanity";

export const galleryImageSchema = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Interiors", value: "interiors" },
          { title: "Amenities", value: "amenities" },
          { title: "Exterior", value: "exterior" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "size",
      title: "Grid Size",
      type: "string",
      options: {
        list: [
          { title: "Tall (portrait)", value: "tall" },
          { title: "Medium (square)", value: "medium" },
          { title: "Short (landscape)", value: "short" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "caption",
      subtitle: "category",
      media: "image",
    },
  },
});