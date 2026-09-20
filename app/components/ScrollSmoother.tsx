"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
    children: ReactNode;
}

export function SmoothScroll({
    children,
}: SmoothScrollProps) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            syncTouch: false,
        });

        // Connect Lenis to GSAP ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        const update = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(update);

        // Prevent GSAP's lag smoothing from fighting Lenis
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}