"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { SplitText } from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { Link } from "lucide-react";
import Button from "./Button";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function ProjectBlock() {
    const container = useRef<HTMLDivElement>(null);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const leftPanel = useRef<HTMLDivElement>(null);
    const mobileScroller = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const activeProject = projects[activeIndex];

    /*
     * ---------------------------------------------------------
     * TITLE ANIMATION
     * ---------------------------------------------------------
     */

    useGSAP(
        () => {
            SplitText.create(".h2-text", {
                type: "words",
                mask: "words",

                onSplit(self) {
                    return gsap.from(self.words, {
                        yPercent: 100,
                        filter: "blur(20px)",
                        opacity: 0,
                        duration: 0.3,
                        stagger: 0.08,
                        ease: "power4.out",

                        scrollTrigger: {
                            trigger: container.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    });
                },
            });
        },
        { scope: container }
    );

    /*
     * ---------------------------------------------------------
     * PROJECT DETECTION — DESKTOP ONLY
     * ---------------------------------------------------------
     */

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const trigger = ScrollTrigger.create({
                    trigger: container.current,
                    start: "top top",
                    end: "bottom bottom",

                    onUpdate: () => {
                        const viewportCenter = window.innerHeight / 2;

                        let closestIndex = 0;
                        let closestDistance = Infinity;

                        projectRefs.current.forEach((project, index) => {
                            if (!project) return;

                            const rect = project.getBoundingClientRect();
                            const projectCenter =
                                rect.top + rect.height / 2;

                            const distance = Math.abs(
                                projectCenter - viewportCenter
                            );

                            if (distance < closestDistance) {
                                closestDistance = distance;
                                closestIndex = index;
                            }
                        });

                        setActiveIndex((currentIndex) =>
                            currentIndex === closestIndex
                                ? currentIndex
                                : closestIndex
                        );
                    },
                });

                return () => trigger.kill();
            });

            return () => mm.revert();
        },
        { scope: container }
    );

    /*
     * ---------------------------------------------------------
     * LEFT PANEL PIN — DESKTOP ONLY
     * ---------------------------------------------------------
     */

    useGSAP(
        () => {
            if (!leftPanel.current || !container.current) return;

            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const trigger = ScrollTrigger.create({
                    trigger: container.current,
                    pin: leftPanel.current,
                    start: "top top",
                    end: "bottom bottom",
                    pinSpacing: false,
                });

                return () => trigger.kill();
            });

            return () => mm.revert();
        },
        { scope: container }
    );

    /*
     * ---------------------------------------------------------
     * LEFT SIDE CONTENT ANIMATION
     * ---------------------------------------------------------
     */

    useGSAP(
        () => {
            const info =
                container.current?.querySelector(".project-info");

            if (!info) return;

            gsap.fromTo(
                info,
                {
                    y: 20,
                    opacity: 0,
                    filter: "blur(12px)",
                },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.6,
                    ease: "power3.out",
                }
            );
        },
        {
            scope: container,
            dependencies: [activeIndex],
        }
    );

    /*
     * ---------------------------------------------------------
     * MOBILE HORIZONTAL SCROLLER
     *
     * Explicitly enable native horizontal touch gestures.
     * This is important when the page also uses GSAP scrolling.
     * ---------------------------------------------------------
     */

    useGSAP(
        () => {
            const scroller = mobileScroller.current;

            if (!scroller) return;

            const handleWheel = (event: WheelEvent) => {
                if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                    scroller.scrollLeft += event.deltaY;
                }
            };

            scroller.addEventListener("wheel", handleWheel, {
                passive: true,
            });

            return () => {
                scroller.removeEventListener("wheel", handleWheel);
            };
        },
        { scope: container }
    );

    return (
        <section
            ref={container}
            className="
                relative
                mx-auto
                max-w-[2560px]
                bg-[#0a0a0a]
                md:mt-24
                md:mb-24
            "
        >
            {/* =================================================
                DESKTOP
                ================================================= */}

            <div
                className="
                    hidden
                    w-full
                    md:flex
                    md:flex-row
                "
            >
                {/* LEFT PANEL */}

                <div
                    ref={leftPanel}
                    className="
                        flex
                        w-full
                        flex-col
                        gap-6
                        p-6
                        md:max-h-dvh
                        md:max-w-[30%]
                        md:px-16
                        md:py-48
                    "
                >
                    <div
                        key={activeProject.id}
                        className="project-info flex h-full flex-col gap-4"
                    >
                        <div className="text-4xl font-bold">
                            {activeProject.title}
                        </div>

                        <div>
                            <div className="font-mono uppercase text-white/40">
                                {activeProject.category}
                            </div>
                        </div>

                        <div className="h-0.5 w-full bg-white/10" />

                        <div className="h-full">
                            <p className="h-full">
                                {activeProject.desc}
                            </p>
                        </div>

                        <div className="h-0.5 w-full bg-white/10" />

                        <Button
                            href={activeProject.href}
                            text="Visit"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}

                <div
                    className="
                        flex
                        w-full
                        flex-col
                        gap-12
                        p-2
                        md:max-w-[70%]
                    "
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(element) => {
                                projectRefs.current[index] = element;
                            }}
                            className="
                                flex
                                w-full
                                items-center
                                md:min-h-[80svh]
                            "
                        >
                            <div
                                className="
                                    w-full
                                    rounded-2xl
                                    bg-white/10
                                    p-2
                                "
                            >
                                <img
                                    src={project.image}
                                    alt={project.slug}
                                    className="
                                        aspect-[1.65/1]
                                        w-full
                                        rounded-xl
                                        object-cover
                                    "
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* =================================================
                MOBILE
                ================================================= */}

            <div
                className="
                    w-full
                    px-4
                    pb-12
                    md:hidden
                "
            >
                <div
                    ref={mobileScroller}
                    className="
                        -mx-4
                        flex
                        w-[calc(100%+2rem)]
                        gap-4
                        overflow-x-auto
                        overflow-y-hidden
                        px-4
                        snap-x
                        snap-mandatory
                        overscroll-x-contain
                        touch-pan-x
                        scrollbar-none
                    "
                    style={{
                        WebkitOverflowScrolling: "touch",
                        touchAction: "pan-x",
                    }}
                >
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="
                                w-[88vw]
                                max-w-[420px]
                                shrink-0
                                snap-center
                                overflow-hidden
                                rounded-2xl
                                bg-white/10
                                p-2
                            "
                        >
                            <div className="w-full overflow-hidden rounded-xl">
                                <img
                                    src={project.image}
                                    alt={project.slug}
                                    draggable={false}
                                    className="
                                        aspect-[1.5/1]
                                        w-full
                                        rounded-xl
                                        object-cover
                                    "
                                />
                            </div>

                            <div className="p-4">
                                <div className="flex flex-col gap-4">
                                    <div className="text-2xl text-white">
                                        {project.title}
                                    </div>

                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex
                                            w-fit
                                            flex-row
                                            items-center
                                            gap-2
                                            rounded-full
                                            bg-white/10
                                            px-4
                                            py-2
                                            text-sm
                                        "
                                    >
                                        <Link
                                            strokeWidth={2}
                                            width={15}
                                            height={15}
                                        />

                                        {project.slug}
                                    </a>

                                    <p className="text-sm leading-6 text-white/70">
                                        {project.desc}
                                    </p>

                                    <div className="h-px w-full bg-white/10" />

                                    <div className="text-sm text-white/60">
                                        {project.year}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}