"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SOCIAL_LINKS } from "@/data/socials";

/* Typing animation roles */
const ROLES = [
  "Mobile Developer",
  "Web Developer",
  "ML Enthusiast",
  "IoT Explorer",
];

function useTypingEffect(strings: string[], typingMs = 80, pauseMs = 2000, deletingMs = 40) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % strings.length);
    } else {
      const nextDisplayed = isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1);
      timeout = setTimeout(
        () => setDisplayed(nextDisplayed),
        isDeleting ? deletingMs : typingMs
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, index, isDeleting, strings, typingMs, pauseMs, deletingMs]);

  return displayed;
}

/* Scroll-reveal variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* Social links */
const SOCIALS = [
  {
    label: SOCIAL_LINKS.github.label,
    href: SOCIAL_LINKS.github.href,
    icon: GithubIcon,
  },
  {
    label: SOCIAL_LINKS.linkedin.label,
    href: SOCIAL_LINKS.linkedin.href,
    icon: LinkedinIcon,
  },
];

/* Component */
export default function Hero() {
  const typedRole = useTypingEffect(ROLES);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-[var(--navbar-height)]"
    >
      {/* Abstract background orb */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Primary orb */}
        <div className="absolute -top-32 right-[-10%] h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px] md:right-[5%] md:h-[700px] md:w-[700px]" />
        {/* Secondary orb */}
        <div className="absolute bottom-[-20%] left-[-15%] h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative mx-auto w-full max-w-[var(--max-width)] px-[var(--px-mobile)] md:px-[var(--px-desktop)]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div variants={childVariants}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-accent-muted/60 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
              👋 Bachelor of Informatics Engineering
            </span>
          </motion.div>

          {/* H1: Name */}
          <motion.h1
            variants={childVariants}
            className="mt-4 font-heading text-3xl font-bold leading-[1.1] tracking-tight text-text-primary md:text-4xl"
          >
            Restu Gede Purnama
          </motion.h1>

          {/* H2: Tagline — monospace, accent */}
          <motion.h2
            variants={childVariants}
            className="mt-3 font-mono text-xl font-semibold text-accent md:text-2xl"
          >
            Long Life Learner
          </motion.h2>

          {/* Typing animation role */}
          <motion.div
            variants={childVariants}
            className="mt-4 flex items-center gap-2 font-mono text-sm text-text-muted"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-success animate-pulse" />
            <span>
              {typedRole}
              <span className="animate-pulse text-accent">|</span>
            </span>
          </motion.div>

          {/* Intro paragraph */}
          <motion.p
            variants={childVariants}
            className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg"
          >
            Full‑stack &amp; mobile developer passionate about crafting clean,
            functional apps. Experienced in building Android apps with Kotlin,
            web platforms with Next.js &amp; Laravel, and exploring machine
            learning pipelines and IoT systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={childVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {/* Primary */}
            <motion.a
              href="#projects"
              id="cta-projects"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(45,212,191,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-[var(--radius-button)] bg-accent px-6 py-3 text-sm font-semibold text-bg-primary transition-colors duration-200 hover:bg-accent-hover"
            >
              View Projects
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </motion.a>

            {/* Outline */}
            <motion.a
              href="#contact"
              id="cta-contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-[var(--radius-button)] border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={childVariants}
            className="mt-8 flex items-center gap-4"
          >
            {SOCIALS.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                id={`social-${s.label.toLowerCase()}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-button)] border border-border text-text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
