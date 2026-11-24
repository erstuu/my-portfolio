import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile, links } from "@/data/cv";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://erstuu-portfolio.vercel.app";

const description = `${profile.headline} building end-to-end products — full-stack web, native Android, and applied AI. Portfolio of ${profile.name} (${profile.handle}).`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.headline}`,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: links.github.href }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    profile.name,
    profile.handle,
    "portfolio",
    "software engineer",
    "full-stack developer",
    "React.js",
    "TypeScript",
    "Laravel",
    "Android developer",
    "Kotlin",
    "machine learning",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${profile.name} — ${profile.headline}`,
    title: `${profile.name} — ${profile.headline}`,
    description,
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.headline}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBFD" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Shell for every page: fonts, theme provider, and motion defaults.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <MotionConfig reducedMotion="user">
          <ThemeProvider>{children}</ThemeProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
