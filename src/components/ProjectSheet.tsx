"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { X } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { repoUrl, type Project } from "@/data/projects";
import { ease } from "@/lib/motion";

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
  exit: {
    opacity: 0,
    y: 24,
    transition: { duration: 0.2 },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

// Detail view for one project: a bottom sheet on mobile, a centered panel on
// desktop. Closes on Escape or backdrop click, keeps keyboard focus inside,
// and hands focus back to whatever opened it.
export default function ProjectSheet({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("[data-autofocus]")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel) return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === panel)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-50">
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-black/40 backdrop-blur-[8px]"
      />

      <div className="absolute inset-0 flex items-end justify-center pointer-events-none sm:items-center">
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-sheet-title"
          variants={panelVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={(event) => event.stopPropagation()}
          className="pointer-events-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-[var(--radius-tile)] bg-surface p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] sm:rounded-[var(--radius-tile)] sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-caption text-ink-muted">{project.period}</p>
              <h2
                id="project-sheet-title"
                className="mt-1 text-title-2 font-semibold text-ink"
              >
                {project.name}
              </h2>
              <p className="mt-1 text-body text-ink-secondary">{project.role}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              data-autofocus
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-secondary text-ink-secondary transition-colors duration-200 hover:text-ink"
            >
              <X size={18} />
            </button>
          </div>

          {project.metric && (
            <div className="mt-8">
              <p className="text-caption uppercase tracking-wide text-ink-muted">
                Impact
              </p>
              <p className="mt-2 text-headline font-semibold text-ink">
                <span className="text-metric font-semibold">{project.metric.value}</span>
                <span className="ml-2 align-middle text-body text-ink-secondary">
                  {project.metric.label}
                </span>
              </p>
            </div>
          )}

          <div className="mt-8">
            <p className="text-caption uppercase tracking-wide text-ink-muted">
              What I built
            </p>
            <ul className="mt-3 space-y-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-body text-ink">
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-caption uppercase tracking-wide text-ink-muted">
              Stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-bg-secondary px-3 py-1 text-sm text-ink-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.repos.map((repo, index) => (
              <a
                key={repo}
                href={repoUrl(repo)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-body text-link transition-opacity duration-200 hover:opacity-80"
              >
                <GithubIcon size={16} />
                {project.repos.length === 1 ? "View code" : repo}
                {index === 0 ? <span aria-hidden="true">›</span> : null}
              </a>
            ))}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-body text-link transition-opacity duration-200 hover:opacity-80"
              >
                Live demo <span aria-hidden="true">›</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>,
    document.body
  );
}
