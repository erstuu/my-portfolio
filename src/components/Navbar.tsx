"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

// Fixed nav: section links on desktop, a theme toggle, and a full-screen menu
// on small screens.
export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 h-[var(--navbar-height)] transition-colors duration-300 ${
          scrolled
            ? "border-b border-hairline bg-bg-primary/80 backdrop-blur-[20px] backdrop-saturate-180"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-full max-w-[var(--max-width-grid)] items-center justify-between px-[var(--px-mobile)] md:px-[var(--px-desktop)]"
        >
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-ink"
          >
            erstuu
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ink-secondary transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-secondary transition-colors duration-200 hover:text-ink"
            >
              <Sun size={18} className="hidden dark:block" />
              <Moon size={18} className="dark:hidden" />
            </button>

            <a
              href="#contact"
              className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover md:inline-flex"
            >
              Contact
            </a>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-secondary transition-colors duration-200 hover:text-ink md:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg-primary md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-[var(--navbar-height)] items-center justify-between px-[var(--px-mobile)]">
              <span className="text-lg font-semibold tracking-tight text-ink">
                erstuu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink-secondary transition-colors duration-200 hover:text-ink"
              >
                <X size={20} />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col items-center justify-center gap-8"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-title-2 font-semibold text-ink transition-opacity duration-200 hover:opacity-70"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex justify-center pb-12">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-accent px-6 py-3 text-body font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
