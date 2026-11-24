import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

export const ease = [0.28, 0.11, 0.32, 1] as const;

export const durations = { fast: 0.3, base: 0.6, slow: 0.9 } as const;

export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// Nudges the hero mockup up and shrinks it slightly as you scroll past.
export function useHeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  return { ref, scale, y };
}

export const fastTransition: Transition = {
  duration: durations.fast,
  ease,
};

export type { Transition, Variants };
