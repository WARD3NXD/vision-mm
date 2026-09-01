"use client"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href: string;
  text: string;
}

export default function Button({ href, text }: ButtonProps) {
  const button = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (!button.current) return;

    // Hover animation
    const handleEnter = () => {
      gsap.to(button.current, {
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
      gsap.to(button.current, {
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

    button.current.addEventListener("mouseenter", handleEnter);
    button.current.addEventListener("mouseleave", handleLeave);

    return () => {
      button.current?.removeEventListener("mouseenter", handleEnter);
      button.current?.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <a
      ref={button}
      href={href}
      className="bg-white inline-flex md:gap-12 justify-between text-black px-6 py-3 md:px-6 md:py-4 items-center md:w-fit rounded-full mt-10"
    >
      <span className="hero-title md:text-xl">{text}</span>
      <ArrowRight strokeWidth={1} />
    </a>
  );
}