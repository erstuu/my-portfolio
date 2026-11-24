"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { certifications, education } from "@/data/cv";
import { reveal, stagger } from "@/lib/motion";

const INITIAL_CERT_COUNT = 8;

// Degree card with relevant coursework, followed by a certification list
// that starts short and expands on request.
export default function Education() {
  const [showAllCerts, setShowAllCerts] = useState(false);

  const hiddenCount = certifications.length - INITIAL_CERT_COUNT;
  const visibleCerts = showAllCerts
    ? certifications
    : certifications.slice(0, INITIAL_CERT_COUNT);

  return (
    <section
      id="education"
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
          Education &amp; certifications.
        </motion.h2>

        <motion.article
          variants={reveal}
          className="mt-12 rounded-[var(--radius-tile)] bg-bg-secondary p-6 md:mt-16 md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
            <div>
              <h3 className="text-headline font-semibold text-ink">
                {education.school}
              </h3>
              <p className="mt-1 text-body text-ink-secondary">
                {education.degree} · {education.location}
              </p>
            </div>

            <div className="flex flex-col gap-1 md:items-end md:text-right">
              <p className="text-body font-semibold text-ink">
                GPA {education.gpa}
              </p>
              <p className="text-caption text-ink-muted">
                {education.graduationStatus} · {education.period}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-caption uppercase tracking-wide text-ink-muted">
              Relevant coursework
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <li
                  key={course}
                  className="rounded-full bg-surface px-3 py-1 text-sm text-ink-secondary"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        <motion.div variants={reveal} className="mt-16 md:mt-24">
          <h3 className="text-headline font-semibold text-ink">
            Certifications
          </h3>

          <ul
            id="certification-list"
            className="mt-6 flex flex-wrap gap-2"
            aria-live="polite"
          >
            {visibleCerts.map((cert) => (
              <li
                key={cert}
                className="rounded-full border border-hairline px-3 py-1 text-sm text-ink-secondary"
              >
                {cert}
              </li>
            ))}
          </ul>

          {hiddenCount > 0 && (
            <button
              type="button"
              aria-expanded={showAllCerts}
              aria-controls="certification-list"
              onClick={() => setShowAllCerts((value) => !value)}
              className="mt-6 text-body text-link transition-opacity duration-200 hover:opacity-80"
            >
              {showAllCerts
                ? "Show fewer certifications"
                : `Show all ${certifications.length} certifications`}
              <span aria-hidden="true"> ›</span>
            </button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
