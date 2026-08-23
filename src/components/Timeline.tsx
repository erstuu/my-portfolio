"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, FlaskConical, BookOpen } from "lucide-react";
import type { ReactNode } from "react";

/* Scroll-reveal variants */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* Timeline data */
interface TimelineItem {
  period: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const TIMELINE: TimelineItem[] = [
  {
    period: "2022 — 2026",
    title: "Informatics Engineering Student",
    description:
      "Studying at university with focus on software engineering, data structures, and algorithms. Building a strong foundation in computer science principles.",
    icon: <GraduationCap size={18} />,
  },
  {
    period: "2024",
    title: "Mobile & Web Development Focus",
    description:
      "Deep-dived into Android development with Kotlin and full-stack web with Laravel & Next.js. Built multiple course and personal projects.",
    icon: <BookOpen size={18} />,
  },
  {
    period: "2025",
    title: "Machine Learning & Data Science",
    description:
      "Explored ML pipelines with CRISP-DM methodology — sentiment analysis (LSTM/Word2Vec), rainfall prediction (Random Forest), and forex movement prediction.",
    icon: <FlaskConical size={18} />,
  },
  {
    period: "2025 — 2026",
    title: "Peer Collaboration & Research Assistance",
    description:
      "Collaborated on thesis-level research projects, assisting peers with data pipelines, model training, and dashboard development for sentiment analysis.",
    icon: <Users size={18} />,
  },
];

/* Component */
export default function Timeline() {
  return (
    <section
      id="timeline"
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
            // journey
          </span>
          <h2 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
            Experience & Education
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative ml-4 border-l-2 border-border pl-8 md:ml-8 md:pl-12">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={idx}
              variants={childVariants}
              className="group relative mb-12 last:mb-0"
            >
              {/* Dot on the line */}
              <div className="absolute -left-[calc(2rem+5px)] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-bg-primary md:-left-[calc(3rem+5px)]">
                {item.icon}
              </div>

              {/* Period badge */}
              <span className="mb-2 inline-block rounded-[var(--radius-pill)] bg-accent-muted px-3 py-0.5 font-mono text-xs text-accent">
                {item.period}
              </span>

              {/* Content card */}
              <motion.div
                whileHover={{ y: -2, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
                className="rounded-[var(--radius-card)] border border-border bg-bg-secondary p-5 shadow-[var(--shadow-card)] transition-colors duration-300"
              >
                <h3 className="mb-2 font-heading text-base font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
