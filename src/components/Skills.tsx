"use client";

import { motion } from "framer-motion";
import { Binary, CodeXml, Database, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/cv";
import { reveal, stagger } from "@/lib/motion";

const ICONS: Record<string, LucideIcon> = {
  "Web & Mobile Development": CodeXml,
  "Databases & Backend APIs": Database,
  "Methodologies & Tools": Wrench,
  "Data Structures & Algorithms": Binary,
};

// Skill groups as cards, each with an icon matched by group title.
export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-bg-secondary py-[var(--section-gap-mobile)] md:py-[var(--section-gap-desktop)]"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mx-auto max-w-[var(--max-width-grid)] px-[var(--px-mobile)] md:px-[var(--px-desktop)]"
      >
        <motion.h2
          variants={reveal}
          className="max-w-[var(--max-width-copy)] text-title-1 font-semibold text-ink"
        >
          What I work with.
        </motion.h2>

        <motion.p
          variants={reveal}
          className="mt-4 max-w-[var(--max-width-copy)] text-body text-ink-secondary"
        >
          Four groups, the stack I build with, the data underneath it, and the
          habits that keep delivery on schedule.
        </motion.p>

        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2 md:gap-5">
          {skillGroups.map((group) => {
            const Icon = ICONS[group.title] ?? CodeXml;

            return (
              <motion.article
                key={group.title}
                variants={reveal}
                className="rounded-[var(--radius-tile)] bg-surface p-6 md:p-8"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="text-ink-secondary"
                />

                <h3 className="mt-6 text-headline font-semibold text-ink">
                  {group.title}
                </h3>

                <p className="mt-2 text-body text-ink-secondary">
                  {group.context}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-bg-secondary px-3 py-1 text-sm text-ink-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
