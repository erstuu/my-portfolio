import { links, profile } from "@/data/cv";

const roleList = `${profile.targetRoles.slice(0, -1).join(", ")} and ${
  profile.targetRoles[profile.targetRoles.length - 1]
}`;

const SECONDARY_LINKS = [
  { label: "Download CV", href: links.cv.href },
  { label: "LinkedIn", href: links.linkedin.href },
  { label: "GitHub", href: links.github.href },
];

// Closing section: email me button plus CV, LinkedIn and GitHub links.
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg-secondary py-[var(--section-gap-mobile)] md:py-[var(--section-gap-desktop)]"
    >
      <div className="mx-auto max-w-[var(--max-width-copy)] px-[var(--px-mobile)] text-center md:px-[var(--px-desktop)]">
        <h2 className="text-title-1 font-semibold text-ink">Let&apos;s talk.</h2>

        <p className="mx-auto mt-4 max-w-xl text-body text-ink-secondary">
          Open to {roleList} roles. {profile.availability}.{" "}
          {profile.relocation}.
        </p>

        <div className="mt-8">
          <a
            href={links.email.href}
            className="inline-block rounded-full bg-accent px-[22px] py-3 text-body text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            Email me
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {SECONDARY_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-body text-link transition-opacity duration-200 hover:opacity-80"
            >
              {link.label} <span aria-hidden="true">›</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
