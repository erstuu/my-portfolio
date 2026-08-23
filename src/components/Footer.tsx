"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SOCIAL_LINKS, OWNER_NAME } from "@/data/socials";

const FOOTER_SOCIALS = [
  {
    label: SOCIAL_LINKS.github.label,
    href: SOCIAL_LINKS.github.href,
    icon: <GithubIcon size={16} />,
  },
  {
    label: SOCIAL_LINKS.linkedin.label,
    href: SOCIAL_LINKS.linkedin.href,
    icon: <LinkedinIcon size={16} />,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/50">
      <div className="mx-auto flex max-w-[var(--max-width)] flex-col items-center gap-4 px-[var(--px-mobile)] py-8 text-center md:flex-row md:justify-between md:px-[var(--px-desktop)] md:text-left">
        {/* Copyright */}
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} {OWNER_NAME}
        </p>

        {/* Social icons — same as Hero icon row */}
        <div className="flex items-center gap-3">
          {FOOTER_SOCIALS.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.1, y: -2, boxShadow: "0 0 8px rgba(45,212,191,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-button)] border border-border text-text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
