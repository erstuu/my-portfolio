"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectSheet from "@/components/ProjectSheet";
import { experienceGroups } from "@/data/cv";
import { getProjectById, type Project } from "@/data/projects";
import { reveal, stagger } from "@/lib/motion";

// Work and leadership history in two groups. Entries that point at a project
// get a "See project" button that opens the same sheet the Projects section uses.
export default function Experience() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeSheet = useCallback(() => setActiveProject(null), []);

  const openProject = (projectId: string) => {
    const project = getProjectById(projectId);
    if (project) setActiveProject(project);
  };

  return (
    <section
      id="experience"
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
          Where I&apos;ve shipped.
        </motion.h2>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {experienceGroups.map((group) => (
            <motion.div key={group.title} variants={reveal}>
              <h3 className="text-eyebrow font-semibold uppercase tracking-wide text-ink-secondary">
                {group.title}
              </h3>

              <ul className="mt-6 divide-y divide-hairline md:mt-8">
                {group.items.map((item) => {
                  const projectId = item.projectId;

                  return (
                    <li
                      key={`${item.period}-${item.role}-${item.org}`}
                      className="grid gap-3 py-8 first:pt-0 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10 md:py-10 md:first:pt-0"
                    >
                      <p className="text-caption text-ink-muted md:pt-1">
                        {item.period}
                      </p>

                      <div>
                        <h4 className="text-headline font-semibold text-ink">
                          {item.role} — {item.org}
                        </h4>

                        <p className="mt-3 max-w-[var(--max-width-copy)] text-body text-ink-secondary">
                          {item.impact}
                        </p>

                        {projectId && (
                          <button
                            type="button"
                            onClick={() => openProject(projectId)}
                            className="mt-4 text-body text-link transition-opacity duration-200 hover:opacity-80"
                          >
                            See project <span aria-hidden="true">›</span>
                          </button>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <ProjectSheet project={activeProject} onClose={closeSheet} />
        )}
      </AnimatePresence>
    </section>
  );
}
