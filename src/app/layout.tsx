import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

/* ── Fonts (02-design-system.md § Typography) ────────────────────── */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ── SEO Metadata ────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Restu Gede Purnama — Portfolio",
  description:
    "Personal developer portfolio of Restu Gede Purnama (erstuu). Informatics Engineering student, full-stack & mobile developer with exposure to ML and IoT.",
  keywords: [
    "Restu Gede Purnama",
    "erstuu",
    "portfolio",
    "developer",
    "full-stack",
    "mobile",
    "machine learning",
    "IoT",
  ],
  authors: [{ name: "Restu Gede Purnama" }],
  openGraph: {
    title: "Restu Gede Purnama — Portfolio",
    description:
      "Full-stack & mobile developer. Informatics Engineering student with ML and IoT experience.",
    type: "website",
    locale: "en_US",
  },
};

/* ── Root Layout ─────────────────────────────────────────────────── */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
