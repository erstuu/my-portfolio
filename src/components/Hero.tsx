"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { links, profile, heroSubcopy } from "@/data/cv";
import { getProjectById } from "@/data/projects";
import { useHeroParallax, reveal, stagger } from "@/lib/motion";

const SOCIALS = [
  { label: "GitHub", href: links.github.href, icon: GithubIcon },
  { label: "LinkedIn", href: links.linkedin.href, icon: LinkedinIcon },
  { label: "Email", href: links.email.href, icon: Mail },
] as const;

const FEATURED = getProjectById("villa-sentiment-analyzer");

// Opening screen: name, tagline, calls to action, and a scroll-linked shot
// of the main project.
export default function Hero() {
  const { ref, scale, y } = useHeroParallax();

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-[var(--px-mobile)] pb-16 pt-[var(--navbar-height)] text-center md:px-[var(--px-desktop)]"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex w-full max-w-[var(--max-width-copy)] flex-col items-center"
      >
        <motion.div variants={reveal}>
          <span className="inline-flex items-center gap-2 rounded-full bg-bg-secondary px-4 py-1.5 text-sm text-ink-secondary">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-success"
            />
            {profile.availability} · {profile.relocation}
          </span>
        </motion.div>

        <motion.p
          variants={reveal}
          className="mt-8 text-eyebrow font-semibold text-ink-secondary"
        >
          {profile.headline}
        </motion.p>

        <motion.h1
          variants={reveal}
          className="mt-2 text-display font-semibold text-ink"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          variants={reveal}
          className="mt-3 text-title-2 font-semibold text-ink-secondary"
        >
          {profile.tagline}
        </motion.h2>

        <motion.p
          variants={reveal}
          className="mt-5 max-w-xl text-body text-ink-secondary"
        >
          {heroSubcopy}
        </motion.p>

        <motion.div
          variants={reveal}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-[22px] py-3 text-body text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            View my work
          </a>
          <a
            href={links.cv.href}
            className="group inline-flex items-center gap-1 text-body text-link transition-colors duration-200 hover:opacity-80"
          >
            {links.cv.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              ›
            </span>
          </a>
        </motion.div>

        <motion.div
          variants={reveal}
          className="mt-8 flex items-center justify-center gap-5"
        >
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.div variants={reveal} className="mt-14 w-full">
          <motion.div
            style={{ scale, y }}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-tile)] border border-hairline bg-bg-secondary shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          >
            {FEATURED?.image ? (
              <Image
                src={FEATURED.image}
                alt={`${FEATURED.name} — dashboard`}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 980px"
                className="object-cover object-top"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
                <p className="text-caption text-ink-muted">
                  {FEATURED?.name ?? "Portfolio"} — dashboard preview
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
