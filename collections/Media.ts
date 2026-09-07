import type { CollectionConfig } from "payload";

export const Media:CollectionConfig = {
    slug : "media",

    access : {
        read : () => true,
    },

    upload : {
        staticDir: "media",
        mimeTypes: ["images/*"],
        imageSizes: [
            {
                name: "thumb",
                height: 400,
                width: 600,
                position: "centre",
            },
            {
                name: "card",
                width: 1400,
                height: 900,
                position: "centre",
            },
        ],
    },
    admin: {
        useAsTitle: "filename",
    },

    fields: [],

};