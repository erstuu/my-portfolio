import { links, profile } from "@/data/cv";

const FOOTER_LINKS = [
  { label: "GitHub", href: links.github.href },
  { label: "LinkedIn", href: links.linkedin.href },
  { label: "Email", href: links.email.href },
];

// Copyright line and social links.
export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-[var(--max-width-grid)] flex-col gap-4 px-[var(--px-mobile)] py-8 text-caption text-ink-muted md:flex-row md:items-center md:justify-between md:px-[var(--px-desktop)]">
        <p>
          © 2026 {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>

        <nav aria-label="Social" className="flex flex-wrap gap-x-5 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
