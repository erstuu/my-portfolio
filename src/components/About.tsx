"use client";

import { useRef, useSyncExternalStore } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { aboutStatement, quickFacts } from "@/data/cv";
import { reveal, stagger } from "@/lib/motion";

const WORDS = aboutStatement.split(" ");

const subscribeNoop = () => () => {};

// False during SSR and the hydration render, true afterwards — lets us skip
// reduced-motion styling on first paint without a hydration mismatch.
const useMounted = () =>
  useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );

// A single word of the statement. Its opacity follows the scroll progress
// through the paragraph, unless the visitor asked for reduced motion.
function Word({
  children,
  progress,
  range,
  reduced,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  reduced: boolean;
}) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  return (
    <motion.span style={reduced ? undefined : { opacity }} className="text-ink">
      {children}
      {" "}
    </motion.span>
  );
}

// Large statement that lights up word by word as you scroll, with three
// quick facts underneath.
export default function About() {
  const reduceMotion = useReducedMotion();
  const mounted = useMounted();
  const reduced = mounted && reduceMotion === true;
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <section
      id="about"
      className="py-[var(--section-gap-mobile)] md:py-[var(--section-gap-desktop)]"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mx-auto max-w-[var(--max-width-grid)] px-[var(--px-mobile)] md:px-[var(--px-desktop)]"
      >
        <h2 className="sr-only">About</h2>

        <motion.p
          ref={ref}
          variants={reveal}
          className="max-w-[var(--max-width-copy)] text-title-2 font-semibold"
        >
          {WORDS.map((word, index) => (
            <Word
              key={`${word}-${index}`}
              progress={scrollYProgress}
              range={[index / WORDS.length, (index + 1) / WORDS.length]}
              reduced={reduced}
            >
              {word}
            </Word>
          ))}
        </motion.p>

        <motion.div
          variants={reveal}
          className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3"
        >
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[var(--radius-tile)] bg-bg-secondary p-6 md:p-8"
            >
              <p className="text-caption uppercase tracking-wide text-ink-muted">
                {fact.label}
              </p>
              <p className="mt-2 text-headline font-semibold text-ink">
                {fact.value}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
