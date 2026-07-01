import { defineField, defineType } from "sanity";

export const amenitySchema = defineType({
  name: "amenity",
  title: "Amenity",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      options: {
        list: [
          { title: "Dumbbell (Gym)", value: "Dumbbell" },
          { title: "Sofa (Lounge)", value: "Sofa" },
          { title: "Package (Packages)", value: "Package" },
          { title: "PawPrint (Pets)", value: "PawPrint" },
          { title: "Bike (Storage)", value: "Bike" },
          { title: "WashingMachine (Laundry)", value: "WashingMachine" },
          { title: "Wifi (Internet)", value: "Wifi" },
          { title: "ShieldCheck (Security)", value: "ShieldCheck" },
          { title: "Car (Parking)", value: "Car" },
          { title: "Zap (Smart Home)", value: "Zap" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});