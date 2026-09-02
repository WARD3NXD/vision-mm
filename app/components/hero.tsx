"use client"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import Button from "./Button";

gsap.registerPlugin(SplitText);

export default function Hero (){
    const container = useRef<HTMLDivElement>(null);
    const button = useRef<HTMLDivElement>(null);

    useGSAP(() => {
          SplitText.create(".hero-title", {
            type: "words",
            mask: "words",
    
            onSplit(self) {
              return gsap.from(self.words, {
                yPercent: 100,
                opacity: 0,
                filter: "blur(20px)",
                duration: 1,
                stagger: 0.08,
                ease: "power4.out",
              });
            },
          });
        },
        { scope: container }
      );

  useGSAP(() => {
  if (!button.current) return;

  // Page-load animation
  gsap.from(button.current, {
    xPercent: -100,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    delay: 1,
  });

}, []);

    return(
        <section ref={container} className="mx-auto w-full md:p-8 p-4 h-svh content-end items-end">
          <div className="absolute top-0 left-0 w-full h-[inherit] -z-10">
            <div className="absolute top-0 left-0 w-full h-[inherit] bg-linear-to-b from-[#0a0a0a]/0 via-[#0a0a0a]/10 to-[#0a0a0a]/100" ></div>
            <video src="/video/hero-bg-video.mp4" autoPlay muted loop className="w-full h-full object-cover" />
          </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end md:h-full pb-4 md:max-w-[2560px] mx-auto">
                <h1 className="md:text-[120px] text-6xl uppercase hero-title font-bold md:text-6xl tracking-tight">
                    <span className="hero-title">Hello World! <br/> Expand your vision </span> 
                </h1>
                
                <Button href="/" text="Let's see" />
                
            </div>
        </section>
    );
}