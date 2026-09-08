"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const greetings = [
  "Hello",
  "Bonjour",
  "नमस्ते",
  "Ciao",
  "Olá",
  "おい",
];

export default function Preloader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  /*
   * ---------------------------------------------------------
   * TRACK PAGE LOADING
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const startTime = performance.now();
    let readyTriggered = false;

    const finishLoading = () => {
      if (readyTriggered) return;

      readyTriggered = true;
      setProgress(100);

      const elapsed = performance.now() - startTime;
      const minimumTime = 1600;
      const remaining = Math.max(0, minimumTime - elapsed);

      window.setTimeout(() => {
        setReady(true);
      }, remaining);
    };

    const updateProgress = () => {
      if (document.readyState === "complete") {
        finishLoading();
        return;
      }

      if (document.readyState === "interactive") {
        setProgress((current) => Math.max(current, 70));
        return;
      }

      setProgress((current) => Math.min(current + 5, 60));
    };

    updateProgress();

    window.addEventListener("load", finishLoading);

    const interval = window.setInterval(updateProgress, 120);

    const fallback = window.setTimeout(() => {
      finishLoading();
    }, 8000);

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearInterval(interval);
      window.clearTimeout(fallback);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * GREETING
   * ---------------------------------------------------------
   */

  useGSAP(
    () => {
      if (!textRef.current) return;

      const text = textRef.current;

      const timeline = gsap.timeline({
        repeat: -1,
      });

      greetings.forEach((greeting, index) => {
        timeline.add(() => {
          text.innerText = `${greeting}.`;
        }, index * 0.25);
      });

      return () => {
        timeline.kill();
      };
    },
    {
      scope: loaderRef,
    }
  );

  /*
   * ---------------------------------------------------------
   * EXIT
   * ---------------------------------------------------------
   */

  useGSAP(
    () => {
      if (!ready || !loaderRef.current) return;

      const loader = loaderRef.current;

      const timeline = gsap.timeline({
        onComplete: () => {
          loader.style.display = "none";
        },
      });

      timeline
        .to(textRef.current, {
          opacity: 0,
          y: -30,
          filter: "blur(10px)",
          duration: 0.3,
          ease: "power3.in",
        })
        .to(
          loader,
          {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
          },
          "-=0.05"
        );

      return () => {
        timeline.kill();
      };
    },
    {
      scope: loaderRef,
      dependencies: [ready],
    }
  );

  /*
   * ---------------------------------------------------------
   * PROGRESS NUMBER
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (!progressRef.current) return;

    gsap.to(progressRef.current, {
      textContent: Math.round(progress),
      duration: 0.25,
      ease: "power2.out",
      snap: {
        textContent: 1,
      },
    });
  }, [progress]);

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <div
      ref={loaderRef}
      className="
        pointer-events-none
        fixed
        inset-0
        z-[9999]
        overflow-hidden
        bg-[#0a0a0a]
        text-white
      "
    >
      {/* GREETING */}

      <div
        ref={textRef}
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          font-mono
          text-3xl
          uppercase
          tracking-tight
          md:text-5xl
        "
      >
        Hello.
      </div>

      {/* PROGRESS */}

      <div
        className="
          absolute
          bottom-6
          left-6
          font-mono
          text-xs
          uppercase
          tracking-widest
          text-white/40
        "
      >
        Loading{" "}
        <span ref={progressRef}>0</span>%
      </div>

      {/* BRAND */}

      <div
        className="
          absolute
          bottom-6
          right-6
          font-mono
          text-xs
          uppercase
          tracking-widest
          text-white/40
        "
      >
        Vision
      </div>
    </div>
  );
}