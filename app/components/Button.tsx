"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href: string;
  text: string;

  // Optional secondary button
  secondaryHref?: string;
  secondaryText?: string;
}

export default function Button({
  href,
  text,
  secondaryHref,
  secondaryText,
}: ButtonProps) {
  const button = useRef<HTMLAnchorElement>(null);
  const secondaryButton = useRef<HTMLAnchorElement>(null);

  /*
   * ---------------------------------------------------------
   * PRIMARY BUTTON
   * ---------------------------------------------------------
   */

  useGSAP(() => {
    const element = button.current;

    if (!element) return;

    const handleEnter = () => {
      gsap.to(element, {
        backgroundColor: "black",
        color: "white",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
        scale: 1.05,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(element, {
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: "80px",
        boxShadow: "none",
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    element.addEventListener("mouseenter", handleEnter);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mouseenter", handleEnter);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * SECONDARY BUTTON
   * ---------------------------------------------------------
   */

  useGSAP(() => {
    const element = secondaryButton.current;

    if (!element) return;

    const handleEnter = () => {
      gsap.to(element, {
        backgroundColor: "white",
        color: "black",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.25)",
        scale: 1.05,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(element, {
        backgroundColor: "transparent",
        color: "white",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: "80px",
        boxShadow: "none",
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    element.addEventListener("mouseenter", handleEnter);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mouseenter", handleEnter);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      {/* =================================================
          PRIMARY BUTTON
          ================================================= */}

      <Link
        ref={button}
        href={href}
        className="
          inline-flex
          items-center
          justify-between
          gap-6
          rounded-full
          border
          border-black
          bg-white
          px-6
          py-3
          text-black
          md:gap-12
          md:px-6
          md:py-4
          md:w-fit
        "
      >
        <span className="hero-title md:text-xl">
          {text}
        </span>

        <ArrowRight strokeWidth={1} />
      </Link>

      {/* =================================================
          SECONDARY BUTTON
          ================================================= */}

      {secondaryHref && secondaryText && (
        <Link
          ref={secondaryButton}
          href={secondaryHref}
          className="
            inline-flex
            items-center
            justify-between
            gap-6
            rounded-full
            border
            border-white
            bg-transparent
            px-6
            py-3
            text-white
            md:gap-12
            md:px-6
            md:py-4
            md:w-fit
          "
        >
          <span className="hero-title md:text-xl">
            {secondaryText}
          </span>

          <ArrowRight strokeWidth={1} />
        </Link>
      )}
    </div>
  );
}