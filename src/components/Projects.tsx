"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import ProjectSheet from "@/components/ProjectSheet";
import {
  featuredProjects,
  archiveProjects,
  repoUrl,
  type Project,
} from "@/data/projects";
import { ease, reveal, stagger } from "@/lib/motion";

const FILTERS = ["All", "Mobile", "Web", "AI/ML"] as const;
type Filter = (typeof FILTERS)[number];

const CAT_DOT: Record<Project["category"], string> = {
  Mobile: "bg-cat-mobile",
  Web: "bg-cat-web",
  "AI/ML": "bg-cat-ml",
  Other: "bg-cat-other",
};

const CAT_TEXT: Record<Project["category"], string> = {
  Mobile: "text-cat-mobile",
  Web: "text-cat-web",
  "AI/ML": "text-cat-ml",
  Other: "text-cat-other",
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } },
};

// Featured work as filterable tiles (the first one spans two columns on
// desktop), plus a compact list of smaller projects below.
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();
  const closeSheet = useCallback(() => setActiveProject(null), []);

  const filtered =
    activeFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => project.category === activeFilter);

  const hoverProps = reduceMotion
    ? {}
    : {
        whileHover: { scale: 1.015, y: -2 },
        transition: { duration: 0.3 },
      };

  return (
    <section
      id="projects"
      className="py-[var(--section-gap-mobile)] md:py-[var(--section-gap-desktop)]"
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
          Selected work.
        </motion.h2>

        <motion.p
          variants={reveal}
          className="mt-4 max-w-[var(--max-width-copy)] text-body text-ink-secondary"
        >
          Four shipped projects, each one measured, not just built.
        </motion.p>

        <motion.div
          variants={reveal}
          role="group"
          aria-label="Filter projects by category"
          className="mt-10 inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-bg-secondary p-1"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-surface text-ink shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                    : "text-ink-secondary hover:text-ink"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          layout
          className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const isFirst = index === 0;

              return (
                <motion.article
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  {...hoverProps}
                  className={`flex flex-col rounded-[var(--radius-tile)] bg-bg-secondary p-6 md:p-8 ${
                    isFirst ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span
                      className={`inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-wide ${CAT_TEXT[project.category]}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-2 w-2 rounded-full ${CAT_DOT[project.category]}`}
                      />
                      {project.category}
                    </span>
                    <span className="text-caption text-ink-muted">
                      {project.period}
                    </span>
                  </div>

                  <div
                    className={`mt-4 gap-8 ${isFirst ? "lg:grid lg:grid-cols-2 lg:items-center" : ""}`}
                  >
                    <div>
                      <h3 className="text-title-2 font-semibold text-ink">
                        {project.name}
                      </h3>

                      <p className="mt-3 text-headline font-semibold text-ink-secondary">
                        {project.headline}
                      </p>

                      {project.metric && (
                        <p className="mt-5">
                          <span className="text-headline font-semibold text-ink">
                            {project.metric.value}
                          </span>
                          <span className="ml-2 text-body text-ink-secondary">
                            {project.metric.label}
                          </span>
                        </p>
                      )}

                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-hairline px-3 py-1 text-sm text-ink-secondary">
                          {project.role}
                        </span>
                        {project.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-surface px-3 py-1 text-sm text-ink-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[20px] border border-hairline bg-bg-primary lg:mt-0">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.name} screenshot`}
                          fill
                          loading={isFirst ? "eager" : "lazy"}
                          sizes={
                            isFirst
                              ? "(max-width: 768px) 100vw, 1100px"
                              : "(max-width: 768px) 100vw, 550px"
                          }
                          className="object-contain object-center"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
                          <p className="text-caption text-ink-muted">
                            {project.name} — screenshot
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="text-body text-link transition-opacity duration-200 hover:opacity-80"
                    >
                      Learn more <span aria-hidden="true">›</span>
                    </button>

                    {project.repos.length > 0 && (
                      <a
                        href={repoUrl(project.repos[0])}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-body text-link transition-opacity duration-200 hover:opacity-80"
                      >
                        <GithubIcon size={16} />
                        View code <span aria-hidden="true">›</span>
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={reveal} className="mt-24 md:mt-32">
          <h3 className="text-headline font-semibold text-ink">
            More projects
          </h3>

          <ul className="mt-6">
            {archiveProjects.map((project) => (
              <li
                key={project.id}
                className="flex flex-col gap-2 border-t border-hairline py-5 md:flex-row md:items-center md:justify-between md:gap-6"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:min-w-0 md:flex-1">
                  <span className="font-semibold text-ink">{project.name}</span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-caption ${CAT_TEXT[project.category]}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${CAT_DOT[project.category]}`}
                    />
                    {project.category}
                  </span>
                  <span className="truncate text-caption text-ink-muted">
                    {project.stack.join(" · ")}
                  </span>
                </div>

                <div className="flex shrink-0 flex-wrap gap-x-5">
                  {project.repos.map((repo) => (
                    <a
                      key={repo}
                      href={repoUrl(repo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-link transition-opacity duration-200 hover:opacity-80"
                    >
                      <GithubIcon size={14} />
                      {project.repos.length === 1 ? "View code" : repo}
                      <span aria-hidden="true">›</span>
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <ProjectSheet project={activeProject} onClose={closeSheet} />
        )}
      </AnimatePresence>
    </section>
  );
}
