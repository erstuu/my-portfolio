"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Cpu, BrainCircuit, Rocket } from "lucide-react";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* Quick Facts data */
const QUICK_FACTS = [
  {
    icon: GraduationCap,
    label: "Status",
    value: "Informatics Engineering Student",
  },
  {
    icon: Code2,
    label: "Focus",
    value: "Full-Stack & Mobile Development",
  },
  {
    icon: BrainCircuit,
    label: "Research Interest",
    value: "Machine Learning & NLP",
  },
  {
    icon: Cpu,
    label: "Exploration",
    value: "IoT & Embedded Systems",
  },
  {
    icon: Rocket,
    label: "Current",
    value: "CRISP-DM & Sentiment Analysis",
  },
];

/* Component */
export default function About() {
  return (
    <section
      id="about"
      className="relative py-[var(--section-gap-mobile)] md:py-[var(--section-gap-desktop)]"
    >
      <motion.div
        className="mx-auto max-w-[var(--max-width)] px-[var(--px-mobile)] md:px-[var(--px-desktop)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Section header */}
        <motion.div variants={childVariants} className="mb-12">
          <span className="mb-2 block font-mono text-sm text-accent">
            // about me
          </span>
          <h2 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
            Get to Know Me
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        {/* 2-column layout */}
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Bio (left, wider) */}
          <motion.div
            variants={childVariants}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              Hi! I&apos;m <span className="font-semibold text-text-primary">Restu Gede Purnama</span>,
              an Informatics Engineering student with a deep passion for building
              software that solves real problems. My journey spans across
              multiple domains — from crafting polished Android apps with Kotlin
              to building full-stack web platforms using Next.js and Laravel.
            </p>

            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              Beyond application development, I&apos;ve ventured into{" "}
              <span className="text-accent">machine learning</span> — working on
              projects like sentiment analysis with LSTM/Word2Vec, rainfall
              prediction with Random Forest, and forex movement prediction. I
              follow the CRISP-DM methodology and enjoy every step from data
              exploration to model deployment.
            </p>

            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              I also have hands-on experience with{" "}
              <span className="text-accent">embedded systems and IoT</span>,
              having built Arduino-based projects that bridge the gap between
              hardware and software. This cross-domain exposure fuels my goal to
              become a versatile engineer who can tackle challenges from any
              angle.
            </p>
          </motion.div>

          {/* Quick Facts card (right) */}
          <motion.div
            variants={childVariants}
            className="lg:col-span-2"
          >
            <div className="rounded-[var(--radius-card)] border border-border bg-bg-secondary p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
              <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-widest text-text-muted">
                Quick Facts
              </h3>

              <ul className="space-y-4">
                {QUICK_FACTS.map((fact) => (
                  <li key={fact.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-button)] bg-accent-muted text-accent">
                      <fact.icon size={16} />
                    </span>
                    <div>
                      <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">
                        {fact.label}
                      </span>
                      <span className="text-sm font-medium text-text-primary">
                        {fact.value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fun badge strip */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["Kotlin", "TypeScript", "Python", "Laravel", "Next.js", "Arduino"].map(
                (tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="rounded-[var(--radius-pill)] border border-border bg-bg-tertiary px-3 py-1 font-mono text-xs text-text-secondary transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
