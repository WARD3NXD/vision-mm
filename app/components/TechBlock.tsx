"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";

export default function TechBlock () {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
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
            duration: 0.6,
            stagger: 0.08,
            ease: "power4.out",
            scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            once: true,
            },
        });
    }); 
})

    return (

        <section ref={container}>
            <div>
                {/* Title */}
                <h2 data-about-heading className="hero-title text-4xl font-semi text-white md:text-7xl">
                    Technologies Section
                </h2>

                {/* Technology Icons */}
                
            </div>
        </section>
    )
}