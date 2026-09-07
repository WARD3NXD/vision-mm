import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",

  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "year", "slug"],
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },

    {
      name: "desc",
      type: "textarea",
      required: true,
    },

    {
      name: "category",
      type: "text",
      required: true,
    },

    {
      name: "year",
      type: "text",
      required: true,
    },

    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },

    {
      name: "href",
      type: "text",
      required: true,
    },
  ],
};