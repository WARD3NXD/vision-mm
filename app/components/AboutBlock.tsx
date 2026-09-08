"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function AboutBlock() {
  const container = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);

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

      if (imageContainer.current) {
        gsap.fromTo(
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
            scrollTrigger: {
              trigger: imageContainer.current,
              start: "top 70%",
              once: true,
            },
          }
        );
      }

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        splits.forEach((split) => split.revert());
      };
    },
    {
      scope: container,
      dependencies: [],
      revertOnUpdate: true,
    }
  );

  return (
    <section
      ref={container}
      className="
        relative mx-auto
        mt-12 mb-12
        overflow-hidden
        bg-[#0a0a0a]
        p-8
        md:mt-24 md:mb-24 md:p-12

        md:py-24
      "
    >
      <div
        className="
          mx-auto
          flex max-w-[2560px]
          flex-col gap-6
          md:gap-12
        "
      >
        <h2
          data-about-heading
          className="
            w-full
            text-xl/7 font-semi text-white
            md:w-[60%]
            md:text-5xl/14
          "
        >
          Hi, I'm a solo designer with over 7 years of experience crafting web
          apps, mobile apps, landing pages, ecommerce stores, and SaaS pages.
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
          "
        >
          <img
            src="/image/polorized-about-image.png"
            alt="Not me lol"
            className="h-full object-contain md:max-w-[50%]"
          />
        </div>

        <h2
          data-about-heading
          className="
            order-3
            ml-auto
            w-full
            text-xl/7 font-semi text-white
            md:w-[45%]
            md:text-5xl/14
          "
        >
          Design is where I live, breathe, and occasionally lose sleep over the
          perfect padding.
        </h2>
      </div>
    </section>
  );
}