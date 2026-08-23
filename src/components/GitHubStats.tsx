"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/data/socials";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function GitHubStats() {
  const username = SOCIAL_LINKS.github.username;

  const themeParams = new URLSearchParams({
    username,
    theme: "transparent",
    hide_border: "true",
    title_color: "2DD4BF",
    text_color: "8A94A6",
    icon_color: "2DD4BF",
    bg_color: "00000000",
    ring_color: "2DD4BF",
  }).toString();

  const statsUrl = `https://github-stats-extended.vercel.app/api?${themeParams}&show_icons=true&include_all_commits=true&count_private=true`;
  const langsUrl = `https://github-stats-extended.vercel.app/api/top-langs/?${themeParams}&layout=compact&langs_count=8`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=2DD4BF&fire=2DD4BF&currStreakLabel=2DD4BF&sideLabels=8A94A6&sideNums=E6EAF2&currStreakNum=E6EAF2&dates=5C6577&background=00000000`;

  return (
    <section
      id="github"
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
            // github
          </span>
          <h2 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
            GitHub Activity
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        {/* Stats grid — same card style as project cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Stats card */}
          <motion.div
            variants={childVariants}
            className="rounded-[var(--radius-card)] border border-border bg-bg-secondary p-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={statsUrl}
              alt="GitHub Stats"
              className="w-full max-w-sm"
              loading="lazy"
            />
          </motion.div>

          {/* Top Languages card */}
          <motion.div
            variants={childVariants}
            className="rounded-[var(--radius-card)] border border-border bg-bg-secondary p-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={langsUrl}
              alt="Top Languages"
              className="w-full max-w-sm"
              loading="lazy"
            />
          </motion.div>

          {/* Streak card */}
          <motion.div
            variants={childVariants}
            className="rounded-[var(--radius-card)] border border-border bg-bg-secondary p-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 flex items-center justify-center md:col-span-2 lg:col-span-1"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={streakUrl}
              alt="GitHub Streak"
              className="w-full max-w-sm"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
