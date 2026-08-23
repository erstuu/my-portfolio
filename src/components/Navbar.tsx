"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

/* Nav items */
const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

/* Component */
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Glass effect on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 h-[var(--navbar-height)] transition-all duration-300 ${scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl shadow-[0_1px_0_0_var(--border)]"
          : "bg-transparent"
          }`}
      >
        <nav className="mx-auto flex h-full max-w-[var(--max-width)] items-center justify-between px-[var(--px-mobile)] md:px-[var(--px-desktop)]">
          {/* Logo */}
          <motion.a
            href="#"
            id="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-mono text-lg font-bold tracking-tight text-accent transition-colors hover:text-accent-hover"
          >
            <span className="text-text-muted">&gt; </span>erstuu
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Right: Theme toggle + Mobile hamburger */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              id="theme-toggle"
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-button)] text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-accent"
            >
              {mounted && (
                <motion.div
                  key={theme}
                  initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              )}
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              type="button"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-button)] text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-accent md:hidden"
            >
              <Menu size={20} />
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer (slide-in) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              id="mobile-drawer"
              className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-bg-secondary p-8 pt-24 shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
            >
              {/* Close button */}
              <motion.button
                type="button"
                id="mobile-menu-close"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-[var(--radius-button)] text-text-secondary hover:bg-bg-tertiary hover:text-accent"
              >
                <X size={20} />
              </motion.button>

              <ul className="flex flex-col gap-6">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <motion.a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      whileHover={{ x: 4, color: "var(--accent)" }}
                      whileTap={{ scale: 0.98 }}
                      className="block text-lg font-medium text-text-primary transition-colors hover:text-accent"
                    >
                      {item.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>

              {/* Social / branding at bottom */}
              <div className="mt-auto pt-8 border-t border-border">
                <span className="font-mono text-sm text-text-muted">
                  &gt; erstuu
                </span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
