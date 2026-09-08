"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useState } from "react";

export default function VisionReveal() {
  const [isHovered, setIsHovered] = useState(false);
  

  // Raw mouse position.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth position.
  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 24,
    mass: 0.45,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 24,
    mass: 0.45,
  });

  // The actual spotlight.
 const mask = useMotionTemplate`
  radial-gradient(
    circle 180px at ${x}px ${y}px,
    black 0%,
    black 35%,
    rgba(0,0,0,0.7) 55%,
    transparent 100%
  )
`;

//   const clipPath = useMotionTemplate`
//     circle(180px at ${x}px ${y}px)
//   `;

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <div
      className="@container relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* =================================================
          BASE TEXT
          Mobile  -> visible
          Desktop -> invisible
          ================================================= */}

      <h1
        className="
          whitespace-nowrap
          text-[32cqw]
          md:text-[29cqw]
         text-[#FFFDD0]
          font-bold
          leading-none
          text-center
          select-none
          md:opacity-0
        "
      >
        VISION
      </h1>

      {/* =================================================
          DESKTOP SPOTLIGHT
          ================================================= */}

      <motion.h1
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          md:block
          whitespace-nowrap
          text-[32cqw]
          md:text-[29cqw]
          text-[#FFFDD0]
          font-bold
          leading-none
          text-center
          select-none
        "
        style={{
        //   clipPath,
        //   WebkitClipPath: clipPath,
        maskImage: mask,
        WebkitMaskImage: mask,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.015 : 1,
          filter : isHovered ? "blur(0px)" : "blur(10px)",
        }}
        transition={{
          opacity: {
            duration: 0.25,
            ease: "easeOut",
          },
          scale: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
          filter: {
            duration: 0.3,
            ease: "easeInOut",
          }
        }}
      >
        VISION
      </motion.h1>
    </div>
  );
}