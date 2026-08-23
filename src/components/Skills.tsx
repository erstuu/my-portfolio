"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, BrainCircuit, Cpu } from "lucide-react";
import type { ReactNode } from "react";

/* Scroll-reveal variants */
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

/* Skill categories */
interface SkillCategory {
  title: string;
  icon: ReactNode;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  techs: string[];
}

const SKILLS: SkillCategory[] = [
  {
    title: "Mobile Development",
    icon: <Smartphone size={28} />,
    colorClass: "text-cat-mobile",
    bgClass: "bg-cat-mobile/10",
    borderClass: "border-cat-mobile/20",
    techs: ["Kotlin", "Android SDK", "Firebase"],
  },
  {
    title: "Web Development",
    icon: <Globe size={28} />,
    colorClass: "text-cat-web",
    bgClass: "bg-cat-web/10",
    borderClass: "border-cat-web/20",
    techs: ["PHP", "Laravel", "JavaScript", "TypeScript", "React"],
  },
  {
    title: "Data Science / ML",
    icon: <BrainCircuit size={28} />,
    colorClass: "text-cat-ml",
    bgClass: "bg-cat-ml/10",
    borderClass: "border-cat-ml/20",
    techs: ["Python", "Jupyter", "scikit-learn", "pandas"],
  },
  {
    title: "Embedded Systems / IoT",
    icon: <Cpu size={28} />,
    colorClass: "text-cat-iot",
    bgClass: "bg-cat-iot/10",
    borderClass: "border-cat-iot/20",
    techs: ["C++", "Arduino", "Mikrokontroler"],
  },
];

/* Component */
export default function Skills() {
  return (
    <section
      id="skills"
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
            // skills
          </span>
          <h2 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
            What I Work With
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        {/* 2×2 grid (stack on mobile) */}
        <div className="grid gap-5 sm:grid-cols-2">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.title}
              variants={childVariants}
              whileHover={{ y: -4, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
              className={`group rounded-[var(--radius-card)] border bg-bg-secondary p-6 shadow-[var(--shadow-card)] transition-colors duration-300 ${skill.borderClass}`}
            >
              {/* Icon */}
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-button)] ${skill.bgClass} ${skill.colorClass}`}
              >
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 font-heading text-base font-semibold text-text-primary">
                {skill.title}
              </h3>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-[var(--radius-pill)] px-2.5 py-1 font-mono text-xs ${skill.bgClass} ${skill.colorClass} transition-opacity group-hover:opacity-100 opacity-80`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
