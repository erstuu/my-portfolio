"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Mail, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SOCIAL_LINKS } from "@/data/socials";

/* ── Zod schema ──────────────────────────────────────────────────── */
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* ── Scroll-reveal variants ──────────────────────────────────────── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* ── Contact info items ──────────────────────────────────────────── */
const CONTACT_INFO = [
  {
    label: "Email",
    value: SOCIAL_LINKS.email.address,
    href: SOCIAL_LINKS.email.href,
    icon: <Mail size={18} />,
  },
  {
    label: "GitHub",
    value: SOCIAL_LINKS.github.username,
    href: SOCIAL_LINKS.github.href,
    icon: <GithubIcon size={18} />,
  },
  {
    label: "LinkedIn",
    value: SOCIAL_LINKS.linkedin.username,
    href: SOCIAL_LINKS.linkedin.href,
    icon: <LinkedinIcon size={18} />,
  },
];

/* ── Component ───────────────────────────────────────────────────── */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    /* Simulate form submission (replace with real endpoint later) */
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Contact form:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-[var(--section-gap-mobile)] md:py-[var(--section-gap-desktop)]"
    >
      <motion.div
        className="mx-auto max-w-[var(--max-width)] px-[var(--px-mobile)] md:px-[var(--px-desktop)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Section header */}
        <motion.div variants={childVariants} className="mb-12">
          <span className="mb-2 block font-mono text-sm text-accent">
            // contact
          </span>
          <h2 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
            Get In Touch
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        {/* 2-column layout: form left, info right */}
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* ── Contact form (left, wider) ───────────────────────── */}
          <motion.div variants={childVariants} className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-text-primary"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  {...register("name")}
                  className="w-full rounded-[var(--radius-button)] border border-border bg-bg-tertiary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-text-primary"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className="w-full rounded-[var(--radius-button)] border border-border bg-bg-tertiary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-text-primary"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project or just say hello…"
                  {...register("message")}
                  className="w-full resize-none rounded-[var(--radius-button)] border border-border bg-bg-tertiary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                id="contact-submit"
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(45,212,191,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-[var(--radius-button)] bg-accent px-6 py-2.5 text-sm font-semibold text-bg-primary transition-colors duration-200 hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success feedback */}
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-success"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* ── Contact info (right) ─────────────────────────────── */}
          <motion.div
            variants={childVariants}
            className="lg:col-span-2 space-y-4"
          >
            <p className="text-sm leading-relaxed text-text-secondary">
              Interested in collaborating or have a question? Feel free to reach
              out through the form or any of the channels below.
            </p>

            <div className="space-y-3 pt-2">
              {CONTACT_INFO.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={
                    item.label === "Email" ? undefined : "noopener noreferrer"
                  }
                  whileHover={{ x: 4, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="flex items-center gap-3 rounded-[var(--radius-button)] border border-border bg-bg-secondary px-4 py-3 text-sm text-text-secondary transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <span className="text-accent">{item.icon}</span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-text-muted">
                      {item.label}
                    </span>
                    <span className="font-medium">{item.value}</span>
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
