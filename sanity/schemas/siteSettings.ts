import { defineField, defineType } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),

    defineField({
      name: "heroEyebrow",
      title: "Homepage Hero Eyebrow",
      type: "string",
      initialValue: "Luxury Living in Philadelphia",
    }),
    defineField({
      name: "heroTitle",
      title: "Homepage Hero Title",
      type: "string",
      initialValue: "Serpentine Apartments",
    }),
    defineField({
      name: "heroDescription",
      title: "Homepage Hero Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      title: "Homepage Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "heroImageAlt",
      title: "Homepage Hero Image Alt Text",
      type: "string",
      initialValue: "Serpentine Apartments residence",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "promoBarEnabled",
      title: "Show Promo Bar",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "promoBarMessage",
      title: "Promo Bar Message",
      type: "string",
    }),
    defineField({
      name: "promoBarLink",
      title: "Promo Bar Link Text",
      type: "string",
    }),
    defineField({
      name: "promoBarHref",
      title: "Promo Bar Link URL",
      type: "string",
    }),
  ],
});