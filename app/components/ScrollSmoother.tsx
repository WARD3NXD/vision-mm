"use client"
import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
);

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

    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
    });

    /*
     * Give existing components a chance to register
     * their ScrollTriggers, then refresh measurements.
     */

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      smoother.kill();
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