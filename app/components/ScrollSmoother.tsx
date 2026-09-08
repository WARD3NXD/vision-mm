"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({
  children,
}: SmoothScrollProps) {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!wrapper.current || !content.current) return;

    const mm = gsap.matchMedia();

    /*
     * ---------------------------------------------------------
     * DESKTOP ONLY
     * ---------------------------------------------------------
     *
     * ScrollSmoother is completely disabled below 768px.
     * Mobile uses the browser's native scrolling.
     */

    mm.add("(min-width: 768px)", () => {
      if (!wrapper.current || !content.current) return;

      const smoother = ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 1.2,
        effects: true,

        normalizeScroll: {
          allowNestedScroll: true,
        },
      });

      /*
       * Refresh ScrollTrigger after the smoother
       * and other components have initialized.
       */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      /*
       * Cleanup when viewport goes below 768px.
       */

      return () => {
        smoother.kill();

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      };
    });

    /*
     * Cleanup when component unmounts.
     */

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      ref={wrapper}
      id="smooth-wrapper"
    >
      <div
        ref={content}
        id="smooth-content"
      >
        {children}
      </div>
    </div>
  );
}