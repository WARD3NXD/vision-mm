"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function AboutBlock() {
    const container = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);

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

          // Image scroll animation
          if (imageContainer.current) {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: imageContainer.current,
                start: "top 70%",
                toggleActions: "play none none none",
              },
            });

            tl.fromTo(
              imageContainer.current,
              {
                y: 150,
                x: 40,
                scale: 1.15,
                rotation: 20,
                opacity: 0,
              },
              {
                y: -8,
                x: -2,
                scale: 1,
                rotation: -7,
                opacity: 1,
                duration: 1.5,
                ease: "power4.out",
              }
            ).to(imageContainer.current, {
              y: -8,
              x: -2,
              scale: 1,
              rotation: -7,
              duration: 0,
              ease: "power2.out",
            });
          }
        },
        { scope: container }
      );

    return (
        <section
          ref={container}
          className="
            relative mx-auto
            mt-12 mb-12
            md:mt-24 md:mb-24
            overflow-hidden
            bg-[#0a0a0a]
            p-4
            md:p-12
          "
        >
          <div
            className="
              mx-auto flex max-w-[2560px]
              flex-col md:gap-12
              gap-6
              md:relative md:flex md:flex-col
            "
          >
            
            <h2
              className="
                w-full
                text-xl/7 font-semi text-white
                md:w-[60%]
                md:text-5xl/14
                h2-text
              "
            >
              Hi, I'm a solo designer with over 7 years of experience
              crafting web apps, mobile apps, landing pages,
              ecommerce stores, and SaaS pages.
            </h2>

            <div
              ref={imageContainer}
              className="
                order-2
                mx-auto
                w-full
                overflow-hidden
                md:mx-0
                md:w-full
                md:content-center
                md:justify-items-center
                md:rotate-[-7deg]
              "
            >
              <img
                src="/image/polorized-about-image.png"
                alt="Not me lol"
                className="md:max-w-[50%] h-full object-contain"
              />
            </div>

            <h2
              className="
                order-3
                ml-auto
                w-full
                text-xl/7 font-semi text-white
                md:w-[45%]
                md:text-5xl/14
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