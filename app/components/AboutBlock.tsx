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
        <section ref={container} className="md:mt-34 md:mb-34 mt-12 mb-12 bg-[#0a0a0a] md:p-12 p-4">
            <div>
                <h2 className="text-3xl md:text-6xl font-semi text-white mb-8 mx-auto">
                    <span className="h2-text">
                        We are a team of passionate individuals dedicated to pushing the boundaries of innovation and creativity. Our mission is to create impactful solutions that inspire and empower people around the world.
                    </span>
                </h2>
            </div>
        </section>
    );
}