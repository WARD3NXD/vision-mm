import type { CollectionConfig } from "payload";

export const CV: CollectionConfig = {
    slug: "cv",

    access: {
        read: () => true,
    },

    upload: {
        mimeTypes: ["application/pdf"],
    },

    admin: {
        useAsTitle: "filename",
    },

    fields: [
        {
            name: "isActive",
            type: "checkbox",
            label: "Active CV",
            defaultValue: false,
        },
    ],
};