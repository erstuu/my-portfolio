"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import {
  projects,
  FILTER_OPTIONS,
  CATEGORY_META,
  type ProjectCategory,
} from "@/data/projects";

/* Scroll-reveal variants */
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

/* Card animation variants (AnimatePresence for filter transitions) */
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -8,
    transition: { duration: 0.2 },
  },
};

/* Component */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>(
    "All"
  );

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
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
            // projects
          </span>
          <h2 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
            Featured Projects
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        {/* Filter bar */}
        <motion.div
          variants={childVariants}
          className="mb-8 flex flex-wrap gap-2"
        >
          {FILTER_OPTIONS.map((option) => {
            const isActive = activeFilter === option;
            return (
              <motion.button
                key={option}
                type="button"
                id={`filter-${option.toLowerCase()}`}
                onClick={() => setActiveFilter(option)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-[var(--radius-pill)] px-4 py-1.5 font-mono text-sm font-medium transition-colors duration-200 ${isActive
                  ? "bg-accent text-bg-primary shadow-[0_0_12px_rgba(45,212,191,0.25)]"
                  : "border border-border text-text-secondary hover:border-accent hover:text-accent"
                  }`}
              >
                {option === "All" ? "All" : CATEGORY_META[option].label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Card grid */}
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const cat = CATEGORY_META[project.category];

              return (
                <motion.article
                  key={project.name}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -4, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="group flex flex-col rounded-[var(--radius-card)] border border-border bg-bg-secondary p-5 shadow-[var(--shadow-card)] transition-colors duration-300"
                >
                  {/* Category tag */}
                  <span
                    className={`mb-3 inline-flex w-fit items-center rounded-[var(--radius-pill)] px-2.5 py-0.5 font-mono text-xs font-medium ${cat.bgClass} ${cat.colorClass}`}
                  >
                    {cat.label}
                  </span>

                  {/* Project name */}
                  <h3 className="mb-2 font-heading text-base font-semibold text-text-primary">
                    {project.name}
                  </h3>

                  {/* Description (2 lines max) */}
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-[var(--radius-pill)] border border-border bg-bg-tertiary px-2 py-0.5 font-mono text-xs text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links — pushed to bottom */}
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    {project.repos.map((repo) => (
                      <a
                        key={repo.name}
                        href={`https://github.com/erstuu/${repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                      >
                        <GithubIcon size={14} />
                        {repo.label}
                        <ExternalLink size={12} className="opacity-50" />
                      </a>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-16 text-center text-text-muted">
            <p className="font-mono text-sm">No projects in this category yet.</p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
