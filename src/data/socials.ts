/**
 * Social links — single source of truth.
 *
 * Per sync-rules.md, social links appear in 3 places:
 * Hero (03), Contact (05), and Footer (05).
 * Centralizing them here prevents inconsistency.
 */

export const SOCIAL_LINKS = {
  github: {
    label: "GitHub",
    href: "https://github.com/erstuu",
    username: "erstuu",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/restu-gede-purnama-aa9583277/",
    username: "Restu Gede Purnama",
  },
  email: {
    label: "Email",
    href: "mailto:restugedepurnama21@gmail.com",
    address: "restugedepurnama21@gmail.com",
  },
} as const;

/** Owner name — sourced from 00-overview.md */
export const OWNER_NAME = "Restu Gede Purnama";
