"use client";

import { SmoothScroll } from "@/app/components/ScrollSmoother";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default function Cv() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            <SmoothScroll>
                <NavBar />

                <section className="px-4 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
                    <div className="mx-auto max-w-400">

                        {/* Header */}
                        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35 md:text-xs">
                                    Resume / CV
                                </p>

                                <h1 className="text-5xl font-medium tracking-tighter md:text-7xl lg:text-8xl">
                                    My Resume<span className="text-white/25">.</span>
                                </h1>
                            </div>

                            <a
                                href="/cv/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black"
                            >
                                <span>Open PDF</span>
                                <span>↗</span>
                            </a>
                        </div>

                        {/* PDF Frame */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-2 shadow-2xl md:p-3">

                            {/* Top bar */}
                            <div className="flex h-10 items-center justify-between border-b border-white/10 px-3 md:px-5">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-white/20" />
                                    <span className="h-2 w-2 rounded-full bg-white/20" />
                                    <span className="h-2 w-2 rounded-full bg-white/20" />
                                </div>

                                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                                    resume.pdf
                                </span>

                                <a
                                    href="/cv/resume.pdf"
                                    download
                                    className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
                                >
                                    Download
                                </a>
                            </div>

                            {/* PDF */}
                            <div className="w-full bg-[#222]">
                                <iframe
                                    src="/cv/resume.pdf"
                                    title="Resume"
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

                        {/* Bottom metadata */}
                        <div className="mt-5 flex flex-col gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/20 sm:flex-row sm:items-center sm:justify-between">
                            <span>Curriculum Vitae</span>
                            <span>Updated 2026</span>
                        </div>

                    </div>
                </section>

                <Footer />
            </SmoothScroll>
        </main>
    );
}