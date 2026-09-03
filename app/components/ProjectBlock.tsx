"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { SplitText } from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { Link } from "lucide-react";
import Button from "./Button";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function ProjectBlock(){

    const container = useRef<HTMLDivElement>(null);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const leftPanel = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const activeProject = projects[activeIndex];

    // title animation
    useGSAP(() => {
        SplitText.create(".h2-text",{
            type: "words",
            mask: "words",

            onSplit(self){
                return gsap.from(self.words,{
                    yPercent:100,
                    filter: "blur(20px)",
                    opacity: 0,
                    duration: 0.3,
                    stagger: 0.08,
                    ease:"power4.out",

                    scrollTrigger:{
                        trigger: container.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            },
        });
    },
    {scope: container}
);

    // project detection
  // project detection
useGSAP(() => {

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
                    const projectCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(projectCenter - viewportCenter);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestIndex = index;
                    }

                });

                setActiveIndex((currentIndex) => {
                    return currentIndex === closestIndex
                        ? currentIndex
                        : closestIndex;
                });

            },
        });

        return () => trigger.kill();

    });

    return () => mm.revert();

},
{scope: container}
);


    useGSAP(() => {

        if (!leftPanel.current || !container.current) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {

            ScrollTrigger.create({
                trigger: container.current,
                pin: leftPanel.current,
                start: "top top",
                end: "bottom bottom",
                pinSpacing: false,
            });

        });

        return () => mm.revert();

    }, {scope: container});


    // left side animation
    useGSAP(() => {

        const info = container.current?.querySelector(".project-info");

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
    });


    return(
        <section
            ref={container}
            className="
                md:mt-24
                md:mb-24
                max-w-[2560px]
                mx-auto
                bg-[#0a0a0a]
                min-h-svh
                relative
            "
        >

            {/* Desktop */}

            <div
                className="
                    hidden
                    md:flex
                    md:flex-row
                    w-full
                "
            >

                {/* left first */}

                <div
                    ref={leftPanel}
                    className="
                        p-6
                        md:px-16
                        md:py-48
                        w-full
                        md:max-w-[30%]
                        md:max-h-dvh
                        flex
                        flex-col
                        gap-6
                    "
                >

                    <div
                        key={activeProject.id}
                        className="project-info flex flex-col gap-4 h-full"
                    >

                        <div className="text-4xl font-bold">
                            {activeProject.title}
                        </div>
                        
                        <div>
                            <div className="font-mono uppercase text-white/40">
                                {activeProject.category}
                            </div>
                        </div>

                        <div className="h-[2px] bg-white/10 w-full"></div>

                        <div className="h-full">
                            <p className="h-full">
                                {activeProject.desc}
                            </p>
                        </div>

                        <div className="h-[2px] bg-white/10 w-full"></div>
                        <Button href={activeProject.href} text="Visit" />

                    </div>

                </div>


                {/* Right Side */}

                <div
                    className="
                        w-full
                        md:max-w-[70%]
                        flex
                        flex-col
                        gap-12
                        p-2
                    "
                >

                    {projects.map((project, index) =>
                        <div
                            key={project.id}
                            ref={(element) => {
                                projectRefs.current[index] = element;
                            }}
                            className="
                                w-full
                                flex
                                items-center
                                md:min-h-[80svh]
                            "
                        >

                            <div
                                className="
                                    bg-white/10
                                    p-2
                                    rounded-2xl
                                    w-full
                                "
                            >

                                <img
                                    src={project.image}
                                    alt={project.slug}
                                    className="
                                        w-full
                                        aspect-[1.65/1]
                                        object-cover
                                        rounded-xl
                                    "
                                />

                            </div>

                        </div>
                    )}

                </div>

            </div>


            {/* Mobile */}

            <div
                className="
                    md:hidden
                    w-full
                    px-4
                    pb-12
                "
            >

                <div className="flex flex-col gap-6 mb-8">

                    <h2 className="h2-text text-white text-2xl">
                        Works I have done so far...
                    </h2>

                    <div className="text-sm text-white/50">
                        A few things I have designed and built.
                    </div>

                </div>


                <div
                    className="
                        flex
                        overflow-x-auto
                        snap-x
                        snap-mandatory
                        scrollbar-none
                        gap-4
                        -mx-4
                        px-4
                    "
                >

                    {projects.map((project) =>
                        <div
                            key={project.id}
                            className="
                                w-[88vw]
                                max-w-[420px]
                                shrink-0
                                snap-center
                                bg-white/10
                                rounded-2xl
                                p-2
                            "
                        >

                            <div className="w-full overflow-hidden rounded-xl">

                                <img
                                    src={project.image}
                                    alt={project.slug}
                                    className="
                                        w-full
                                        aspect-[1.5/1]
                                        object-cover
                                        rounded-xl
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
                                            bg-white/10
                                            px-4
                                            py-2
                                            flex
                                            flex-row
                                            gap-2
                                            items-center
                                            w-fit
                                            rounded-full
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

                                    <div className="h-[1px] bg-white/10 w-full"></div>

                                    <div className="text-sm text-white/60">
                                        {project.year}
                                    </div>

                                </div>

                            </div>

                        </div>
                    )}

                </div>

            </div>

        </section>
    );
}