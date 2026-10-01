import sharp from "sharp";

import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

import { Media } from "./collections/Media";
import { Projects } from "./collections/Project";
import { Stats } from "./collections/Stats";
import { CV } from "./collections/cv";

export default buildConfig({
    editor: lexicalEditor(),

    collections: [
        Projects,
        Media,
        Stats,
        CV,
    ],

    plugins: [
        vercelBlobStorage({
            enabled: true,

            collections: {
                cv: true,
            },

            token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
    ],

    secret: process.env.PAYLOAD_SECRET || "",

    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL || "",
        },
    }),

    sharp,
});