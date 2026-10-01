import { getPayload } from "payload";
import config from "@payload-config";

import { SmoothScroll } from "@/app/components/ScrollSmoother";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default async function Cv() {
    const payload = await getPayload({
        config,
    });

    // Get the CV that is marked as active in Payload
    const { docs } = await payload.find({
        collection: "cv",
        where: {
            isActive: {
                equals: true,
            },
        },
        limit: 1,
    });

    const cv = docs[0];
    console.log("CV:", cv);
    console.log("CV URL:", cv?.url);

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            <SmoothScroll>
                <NavBar />

                <section className="px-4 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
                    <div className="mx-auto max-w-400">

                        {/* =====================================================
                            HEADER
                        ====================================================== */}

                        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">

                            <div>
                                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35 md:text-xs">
                                    Resume / CV
                                </p>

                                <h1 className="text-5xl font-medium tracking-tighter md:text-7xl lg:text-8xl">
                                    My Resume
                                    <span className="text-white/25">.</span>
                                </h1>
                            </div>

                            {/* Open PDF */}
                            {cv?.url && (
                                <a
                                    href={cv.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black"
                                >
                                    <span>Open PDF</span>
                                    <span>↗</span>
                                </a>
                            )}
                        </div>

                        {/* =====================================================
                            PDF FRAME
                        ====================================================== */}

                        {cv?.url ? (
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-2 shadow-2xl md:p-3">

                                {/* -------------------------------------------------
                                    TOP BAR
                                -------------------------------------------------- */}

                                <div className="flex h-10 items-center justify-between border-b border-white/10 px-3 md:px-5">

                                    {/* Fake browser dots */}
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-white/20" />
                                        <span className="h-2 w-2 rounded-full bg-white/20" />
                                        <span className="h-2 w-2 rounded-full bg-white/20" />
                                    </div>

                                    {/* Filename */}
                                    <span className="max-w-[45%] truncate font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                                        {cv.filename}
                                    </span>

                                    {/* Download */}
                                    <a
                                        href={cv.url}
                                        download
                                        className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
                                    >
                                        Download
                                    </a>
                                </div>

                                {/* -------------------------------------------------
                                    PDF
                                -------------------------------------------------- */}

                                <div className="w-full bg-[#222]">
                                    <iframe
                                        src={cv.url}
                                        title={cv.filename || "Resume"}
                                        className="
                                            block
                                            h-[75svh]
                                            min-h-150
                                            w-full
                                            border-0
                                            md:h-[90svh]
                                        "
                                    />
                                </div>
                            </div>
                        ) : (
                            /* =====================================================
                               NO ACTIVE CV
                            ====================================================== */

                            <div className="flex min-h-100 items-center justify-center rounded-2xl border border-white/10 bg-[#111]">
                                <div className="text-center">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                                        Resume currently unavailable
                                    </p>

                                    <p className="mt-3 text-sm text-white/20">
                                        Please check back soon.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* =====================================================
                            BOTTOM METADATA
                        ====================================================== */}

                        <div className="mt-5 flex flex-col gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/20 sm:flex-row sm:items-center sm:justify-between">

                            <span>
                                Curriculum Vitae
                            </span>

                            <span>
                                {cv?.updatedAt
                                    ? `Updated ${new Date(cv.updatedAt).getFullYear()}`
                                    : "Resume unavailable"}
                            </span>

                        </div>

                    </div>
                </section>

                <Footer />
            </SmoothScroll>
        </main>
    );
}