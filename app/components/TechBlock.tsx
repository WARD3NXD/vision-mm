"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";

export default function TechBlock() {
    const container = useRef<HTMLDivElement>(null);

    const technologies = [
        {
            name: "Figma",
            category: "UI / UX Design",
            image: "/tech/figma.svg",
        },
        {
            name: "Photoshop",
            category: "Visual Design",
            image: "/tech/photoshop.svg",
        },
        {
            name: "Illustrator",
            category: "Visual Design",
            image: "/tech/illustrator.svg",
        },
        {
            name: "Premiere Pro",
            category: "Video Editing",
            image: "/tech/premire.svg",
        },
        {
            name: "Next.js",
            category: "Web Development",
            image: "/tech/nextjs.svg",
        },
        {
            name: "Webflow",
            category: "Web Development",
            image: "/tech/webflow.svg",
        },
        {
            name: "After Effects",
            category: "Motion Design",
            image: "/tech/after-effects.svg",
        },
        {
            name: "React",
            category: "Web Development",
            image: "/tech/react.svg",
        },
    ];

    useGSAP(
        () => {
            const headings = gsap.utils.toArray<HTMLElement>(
                "[data-about-heading]"
            );

            const splits: SplitText[] = [];

            headings.forEach((heading) => {
                const split = SplitText.create(heading, {
                    type: "words",
                    mask: "words",
                });

                splits.push(split);

                gsap.set(split.words, {
                    yPercent: 100,
                    filter: "blur(20px)",
                    opacity: 0,
                });

                gsap.to(split.words, {
                    yPercent: 0,
                    filter: "blur(0px)",
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.07,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 82%",
                        once: true,
                    },
                });
            });

            gsap.fromTo(
                "[data-tech-item]",
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.07,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "[data-tech-grid]",
                        start: "top 78%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                "[data-tech-meta]",
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "[data-tech-grid]",
                        start: "top 78%",
                        once: true,
                    },
                }
            );

            return () => {
                splits.forEach((split) => split.revert());
            };
        },
        { scope: container }
    );

    return (
        <section
            ref={container}
            className="relative w-full overflow-hidden bg-[#0a0a0a] px-4 py-20 text-white md:px-8 md:py-32 lg:px-12"
        >
            {/* Background Grid */}
            {/* <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute inset-0
                    opacity-[0.035]
                    bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
                    bg-size-[80px_80px]
                "
            /> */}

            <div className="relative mx-auto max-w-550">

                {/* Header */}
                <div className="mb-16 grid grid-cols-1 gap-10 md:mb-24 lg:grid-cols-[1fr_320px] lg:items-end">

                    <div className="overflow-hidden">
                        <div
                            data-tech-meta
                            className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35 md:text-xs"
                        >
                            <span className="h-1.25 w-1.25 rounded-full bg-white/70" />
                            Tools / Stack
                        </div>

                        <h2
                            data-about-heading
                            className="
                                hero-title
                                text-[clamp(3.2rem,8vw,8rem)]
                                font-medium
                                leading-[0.82]
                                tracking-[-0.055em]
                                text-white
                            "
                        >
                            Technologies
                            <br />
                            I work with<span className="text-white/20">.</span>
                        </h2>
                    </div>

                    <div
                        data-tech-meta
                        className="flex flex-col gap-5 lg:pb-2"
                    >
                        <p className="max-w-72.5 text-sm leading-[1.6] text-white/45">
                            A toolkit built around visual design, interaction,
                            motion and modern web development.
                        </p>

                        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                            <span>08</span>
                            <span className="h-px w-8 bg-white/20" />
                            <span>Technologies</span>
                        </div>
                    </div>
                </div>

                {/* Technology List */}
                <div
                    data-tech-grid
                    className="relative border-t border-white/15"
                >

                    {/* Desktop Labels */}
                    <div className="hidden grid-cols-[80px_1fr_180px_100px] border-b border-white/10 py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25 md:grid">
                        <span>No.</span>
                        <span>Technology</span>
                        <span>Discipline</span>
                        <span className="text-right">Index</span>
                    </div>

                    {technologies.map((technology, index) => (
                        <div
                            key={technology.name}
                            data-tech-item
                            className="
                                group
                                relative
                                border-b
                                border-white/10
                                transition-colors
                                duration-500
                                hover:bg-white/2.5
                            "
                        >

                            {/* Desktop */}
                            <div
                                className="
                                    hidden
                                    min-h-31.25
                                    grid-cols-[80px_1fr_180px_100px]
                                    items-center
                                    md:grid
                                "
                            >
                                <div className="font-mono text-xs text-white/25 transition-colors duration-300 group-hover:text-white/70">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="relative flex items-center gap-8">

                                    {/* Logo */}
                                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                rounded-full
                                                border
                                                border-white/10
                                                scale-75
                                                opacity-0
                                                transition-all
                                                duration-500
                                                group-hover:scale-100
                                                group-hover:opacity-100
                                            "
                                        />

                                        <img
                                            src={technology.image}
                                            alt={`${technology.name} logo`}
                                            className="
                                                relative
                                                z-10
                                                h-9
                                                w-9
                                                object-contain
                                                opacity-55
                                                grayscale
                                                transition-all
                                                duration-500
                                                group-hover:scale-110
                                                group-hover:opacity-100
                                                group-hover:grayscale-0
                                            "
                                        />
                                    </div>

                                    <h3
                                        className="
                                            text-[clamp(2rem,3.5vw,3.5rem)]
                                            font-medium
                                            leading-none
                                            tracking-[-0.04em]
                                            text-white/55
                                            transition-all
                                            duration-500
                                            group-hover:translate-x-3
                                            group-hover:text-white
                                        "
                                    >
                                        {technology.name}
                                    </h3>

                                </div>

                                <div className="text-xs text-white/30 transition-colors duration-300 group-hover:text-white/60">
                                    {technology.category}
                                </div>

                                <div className="text-right font-mono text-[10px] text-white/20">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="flex min-h-27.5 items-center gap-4 py-4 md:hidden">

                                <div className="w-7 shrink-0 font-mono text-[9px] text-white/25">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/2">
                                    <img
                                        src={technology.image}
                                        alt={`${technology.name} logo`}
                                        className="h-7 w-7 object-contain opacity-70"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="truncate text-xl font-medium tracking-tight text-white">
                                        {technology.name}
                                    </h3>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/30">
                                        {technology.category}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Line */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-px
                                    w-0
                                    bg-white
                                    transition-all
                                    duration-700
                                    ease-out
                                    group-hover:w-full
                                "
                            />

                            {/* Corner Marker */}
                            <div
                                className="
                                    absolute
                                    right-0
                                    top-0
                                    h-2
                                    w-2
                                    border-r
                                    border-t
                                    border-white
                                    opacity-0
                                    transition-opacity
                                    duration-300
                                    group-hover:opacity-60
                                "
                            />
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div
                    data-tech-meta
                    className="
                        mt-6
                        flex
                        flex-col
                        gap-4
                        md:flex-row
                        md:items-center
                        md:justify-between
                    "
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                        Design · Development · Motion
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                        Always learning / always building
                    </span>
                </div>
            </div>
        </section>
    );
}