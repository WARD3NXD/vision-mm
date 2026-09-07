import type { CollectionConfig } from "payload";

export const Stats: CollectionConfig = {
    slug: "stats",

    access: {
        read: ()=> true,
        update: ()=> true
    },

    fields: [
        {
            name: "label",
            type: "text",
            required: true,
        },
        {
            name: "suffix",
            type: "text",
            required: true,
        },
        {
            name: "Number",
            type: "number",
            required: true,
        },
    ],
};
