"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassWidgetBaseProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  glowEffect?: boolean;
  glowColor?:
    | "cyan"
    | "purple"
    | "blue"
    | "pink"
    | "green"
    | "amber"
    | "red"
    | "black";
  hoverScale?: boolean;
  interactive?: boolean;
}

const sizeClasses = {
  sm: "p-3",
  md: "p-4",
  lg: "p-5",
  xl: "p-6",
};

const glowColors = {
  cyan: "from-cyan-500/30 via-blue-500/30 to-purple-500/30",
  purple: "from-purple-500/30 via-pink-500/30 to-purple-500/30",
  blue: "from-blue-500/30 via-indigo-500/30 to-blue-500/30",
  pink: "from-pink-500/30 via-rose-500/30 to-pink-500/30",
  green: "from-emerald-500/30 via-teal-500/30 to-emerald-500/30",
  amber: "from-amber-500/30 via-orange-500/30 to-amber-500/30",
  red: "from-red-500/30 via-rose-500/30 to-red-500/30",
  black: "from-black-500/30 via-white-500/10 to-white-500/10"
};

const widgetVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      visualDuration: 0.4,
      bounce: 0.2,
    },
  },

  hover: {
    y: -2,
    transition: {
      type: "spring",
      visualDuration: 0.3,
      bounce: 0.4,
    },
  },
} as const;

const glowVariants: Variants = {
  initial: {
    opacity: 0.4,
    scale: 0.98,
  },

  animate: {
    opacity: [0.4, 0.6, 0.4],
    scale: [0.98, 1, 0.98],

    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },

  hover: {
    opacity: 0.8,
    scale: 1.02,

    transition: {
      type: "spring",
      visualDuration: 0.3,
      bounce: 0.3,
    },
  },
};

const GlassWidgetBase = React.forwardRef<
  HTMLDivElement,
  GlassWidgetBaseProps
>(
  (
    {
      className,
      children,
      size = "md",
      glowEffect = true,
      glowColor = "cyan",
      hoverScale = true,
      interactive = true,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate="visible"
        whileHover={hoverScale ? "hover" : undefined}
        variants={widgetVariants}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/10",
          "bg-white/6",
          "backdrop-blur-sm",
          "shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
          "transition-colors duration-300",
          sizeClasses[size],
          interactive && "cursor-default",
          className
        )}
        {...props}
      >
        {glowEffect && (
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className={cn(
              "pointer-events-none absolute -inset-20",
              "bg-linear-to-r blur-3xl",
              glowColors[glowColor]
            )}
          />
        )}

        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      </motion.div>
    );
  }
);

GlassWidgetBase.displayName = "GlassWidgetBase";

export { GlassWidgetBase };
export type { GlassWidgetBaseProps };