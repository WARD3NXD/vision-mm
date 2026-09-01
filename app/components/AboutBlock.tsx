"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/src/SplitText";

gsap.registerPlugin(SplitText);

export default function AboutBlock() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
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

    return (
        <section
          ref={container}
          className="
            relative mx-auto
            mt-12 mb-12
            min-svh
            overflow-hidden
            bg-[#0a0a0a]
            p-4
            md:p-12
          "
        >
          <div
            className="
              mx-auto flex max-w-[1800px]
              flex-col md:gap-12
              gap-6
              md:relative md:block md:min-h-[80svh]
            "
          >

            {/* Intro */}
            <h2
              className="
                w-full
                text-xl/7 font-semi text-white
                md:absolute md:left-0 md:top-0
                md:w-[60%]
                md:text-5xl/16
                h2-text
              "
            >
              Hi, I'm a solo designer with over 7 years of experience
              crafting web apps, mobile apps, landing pages,
              ecommerce stores, and SaaS pages.
            </h2>


            {/* Image */}
            <div
              className="
                order-2
                mx-auto
                aspect-[1.65/1]
                w-full
                overflow-hidden
                bg-neutral-200

                md:absolute
                md:left-[15%]
                md:top-[25%]
                md:mx-0
                md:w-[55%]
                md:-rotate-[7deg]
              "
            >
              <img
                src="/images/about.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>


            {/* Statement */}
            <h2
              className="
                order-3
                ml-auto
                w-full
                text-xl/7 font-semi text-white

                md:absolute
                md:bottom-0
                md:right-0
                md:w-[45%]
                md:text-5xl/16
                h2-text
              "
            >
              Design is where I live, breathe, and occasionally lose sleep over
              the perfect padding.
            </h2>

          </div>
        </section>
    );
}