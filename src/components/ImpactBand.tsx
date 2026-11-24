"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { metrics } from "@/data/cv";
import { ease, reveal, stagger } from "@/lib/motion";

interface ParsedMetric {
  prefix: string;
  num: number;
  suffix: string;
  decimals: number;
  grouped: boolean;
}

// Splits strings like "1,000+" or "~85%" into the parts the counter animates.
function parseMetric(value: string): ParsedMetric | null {
  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!match) return null;
  const [, prefix, numRaw, suffix] = match;
  const decimals = numRaw.includes(".")
    ? numRaw.split(".")[1].length
    : 0;
  return {
    prefix,
    num: Number(numRaw.replace(/,/g, "")),
    suffix,
    decimals,
    grouped: numRaw.includes(","),
  };
}

// Formats the running number to look like the original string at its end state.
function formatMetric(
  num: number,
  decimals: number,
  grouped: boolean,
): string {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: grouped,
  });
}

// Counts a metric up from zero the first time it scrolls into view. Skips the
// animation for reduced motion and for values that don't parse.
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    const parsed = parseMetric(value);
    if (!el || !parsed || !inView || reduceMotion) return;

    const { prefix, num, suffix, decimals, grouped } = parsed;
    const controls = animate(0, num, {
      duration: 1.2,
      ease,
      onUpdate: (current) => {
        el.textContent = `${prefix}${formatMetric(current, decimals, grouped)}${suffix}`;
      },
      onComplete: () => {
        el.textContent = value;
      },
    });
    return () => {
      controls.stop();
      el.textContent = value;
    };
  }, [inView, reduceMotion, value]);

  return <span ref={ref}>{value}</span>;
}

// Dark strip of headline numbers that count themselves up on entry.
export default function ImpactBand() {
  return (
    <section id="impact" className="bg-inverse-bg text-inverse-text">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mx-auto max-w-[var(--max-width-grid)] px-[var(--px-mobile)] py-[var(--section-gap-mobile)] md:px-[var(--px-desktop)] md:py-[var(--section-gap-desktop)]"
      >
        <motion.h2
          variants={reveal}
          className="max-w-[var(--max-width-copy)] text-title-1 font-semibold"
        >
          Results, not just code.
        </motion.h2>

        <motion.div
          variants={reveal}
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:mt-24 lg:grid-cols-4"
        >
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-[clamp(2.25rem,1.5rem+3.5vw,5.25rem)] font-semibold leading-none tracking-[-0.03em] tabular-nums text-inverse-text">
                <CountUp value={metric.value} />
              </p>
              <p className="mt-3 text-caption text-inverse-text-secondary">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
