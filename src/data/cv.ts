export type LinkStatus = "ok" | "todo";

export interface SocialLink {
  key: "email" | "github" | "linkedin" | "portfolio" | "cv";
  label: string;
  href: string;
  handle?: string;
  address?: string;
  status: LinkStatus;
}

export interface Metric {
  value: string;
  label: string;
  source: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  impact: string;
  projectId?: string;
}

export interface SkillGroup {
  title: string;
  context: string;
  items: string[];
}

export const profile = {
  name: "Restu Gede Purnama",
  handle: "erstuu",
  headline: "Software Engineer",
  tagline: "Long Life Learner",
  location: "Sukabumi, West Java 43153",
  relocation: "Willing to relocate",
  email: "restugedepurnama21@gmail.com",
  availability: "Available to join immediately",
  targetRoles: [
    "Software Engineer",
    "Junior Software Engineer",
    "Android Developer",
  ],
} as const;

export const availabilityBadge = `${profile.availability} · ${profile.relocation}`;

export const summary =
  "Software Engineer with a strong foundation in end-to-end full-stack application development. Experienced in building responsive user interfaces using React.js and TypeScript, developing backend services with PHP (Laravel) and Node.js, and building native Android mobile applications with Kotlin. Proficient in managing relational databases (PostgreSQL/MySQL), integrating RESTful APIs, and collaborating via Git/GitHub across Agile SDLC workflows to deliver secure, scalable, and high-performing digital solutions.";

export const heroSubcopy =
  "Full-stack web, native Android, and applied AI — built end to end, with results you can measure.";

export const aboutStatement =
  "I build end-to-end products, responsive React and TypeScript interfaces, Laravel and Node.js back ends, and native Android apps in Kotlin and I care about the outcome: faster workflows, reliable APIs, results users can feel.";

export const links = {
  email: {
    key: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    address: profile.email,
    status: "ok",
  },
  github: {
    key: "github",
    label: "GitHub",
    href: "https://github.com/erstuu",
    handle: "erstuu",
    status: "ok",
  },
  linkedin: {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/restu-gede-purnama-aa9583277/",
    handle: "Restu Gede Purnama",
    status: "todo",
  },
  portfolio: {
    key: "portfolio",
    label: "Portfolio",
    href: "https://erstuu-portfolio.vercel.app",
    status: "todo",
  },
  cv: {
    key: "cv",
    label: "Download CV",
    href: "/cv/CV-Restu-Gede-Purnama.pdf",
    status: "ok",
  },
} as const satisfies Record<string, SocialLink>;

export const metrics: Metric[] = [
  {
    value: "1,000+",
    label: "customer reviews classified in under 5 seconds",
    source: "Villa Sentiment Analyzer",
  },
  {
    value: "~85%",
    label: "less manual sentiment-analysis workload",
    source: "Villa Sentiment Analyzer",
  },
  {
    value: "~60%",
    label: "faster ticketing & operations workflows",
    source: "RenangKu",
  },
  {
    value: "900+",
    label: "hours of Android & software engineering training",
    source: "Bangkit Academy",
  },
];

export const workExperience: ExperienceItem[] = [
  {
    period: "Nov 2025 – Jun 2026",
    role: "Full-Stack Developer",
    org: "Villa Sentiment Analyzer",
    impact:
      "Developed and deployed a responsive React.js and TypeScript web app, automating batch CSV review processing to classify 1,000+ customer reviews in under 5 seconds via a Python LSTM model.",
    projectId: "villa-sentiment-analyzer",
  },
  {
    period: "Jun 2025 – Jul 2025",
    role: "Full-Stack Developer",
    org: "RenangKu",
    impact:
      "Engineered an end-to-end web application with PHP (Laravel), React.js (TypeScript), and PostgreSQL/MySQL, streamlining daily ticketing and operational workflows by ~60%.",
    projectId: "renangku",
  },
  {
    period: "Feb 2025 – Mar 2025",
    role: "Android Developer",
    org: "DMCare Nurse",
    impact:
      "Architected and delivered a native Kotlin Android application across 2 academic faculties within an 8-week timeline, with automated BMI calculation and blood glucose risk classification.",
    projectId: "dmcare-nurse",
  },
  {
    period: "Nov 2024 – Dec 2024",
    role: "Android Developer",
    org: "GlucoGuide (Bangkit Capstone)",
    impact:
      "Built a Kotlin Android app (MVVM, Jetpack Compose, Firebase) integrating a Machine Learning REST API for real-time diabetes risk prediction with <2-second inference response time.",
    projectId: "glucoguide",
  },
  {
    period: "Sep 2024 – Dec 2024",
    role: "Mobile Development Cohort",
    org: "Bangkit Academy (led by Google, Tokopedia, Gojek, & Traveloka), Certified Independent Study",
    impact:
      "Completed 900+ hours of intensive Android & software engineering training, achieving a 100% on-time submission rate across 15+ coding labs, Agile/Scrum sprints, and capstone milestones.",
  },
];

export const leadershipExperience: ExperienceItem[] = [
  {
    period: "Mar 2026 – Jun 2026",
    role: "McKinsey Forward Learner",
    org: "McKinsey.org",
    impact:
      "Completed a 10-week structured leadership and problem-solving curriculum across 5 core modules, applying analytical frameworks and AI-ready digital toolkits to boost team productivity.",
  },
  {
    period: "Nov 2023 – Oct 2024",
    role: "Staff, Department of Information and Communication",
    org: "BEM Fakultas Sains dan Teknologi UMMI",
    impact:
      "Managed digital publication schedules and coordinated 20+ faculty-wide informational campaigns across cross-functional divisions with 100% on-time delivery.",
  },
  {
    period: "Jun 2023 – Aug 2023",
    role: "Member, Publication, Documentation, and Decoration Division",
    org: "HMIF, Hari Teknik Informatika (HARTIK) 2023",
    impact:
      "Produced 15+ visual communication assets and compiled end-to-end event documentation for 200+ participants under strict operational deadlines.",
  },
];

export const experienceGroups = [
  { title: "Work & Project Experience", items: workExperience },
  { title: "Leadership & Learning", items: leadershipExperience },
] as const;

export const education = {
  school: "Universitas Muhammadiyah Sukabumi",
  location: "Sukabumi, West Java",
  degree: "Bachelor of Computer Science in Informatics Engineering",
  gpa: "3.88 / 4.00",
  period: "Oct 2022 – Jun 2026",
  graduationStatus: "Graduate",
  coursework: [
    "Web & Mobile Application Development",
    "Database Management (SQL/Relational DB)",
    "Software Engineering (Agile)",
    "Data Structures & Algorithms (NeetCode 150)",
  ],
} as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Web & Mobile Development",
    context:
      "Building responsive interfaces and native Android apps, front end to back end.",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "PHP (Laravel)",
      "HTML5/CSS3",
      "Tailwind CSS",
      "Android Native (Kotlin, Jetpack Compose, MVVM)",
      "Python (Deep Learning / LSTM)",
    ],
  },
  {
    title: "Databases & Backend APIs",
    context:
      "Designing normalized relational schemas and secure REST APIs with role-based access.",
    items: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "RESTful APIs",
      "Firebase",
      "Role-Based Authentication",
    ],
  },
  {
    title: "Methodologies & Tools",
    context:
      "Shipping on schedule with Agile workflows and a practical toolchain.",
    items: [
      "Agile",
      "Waterfall",
      "Git & GitHub",
      "VS Code",
      "Android Studio",
      "Figma",
      "AI Productivity Tools",
    ],
  },
  {
    title: "Data Structures & Algorithms",
    context:
      "Practising problem solving through structured coursework and daily drills.",
    items: ["NeetCode 150"],
  },
];

export const certifications = [
  "Bangkit Academy Mobile Development Graduate",
  "Dicoding Kotlin Programming",
  "Dicoding Android Intermediate",
  "Dicoding Android Jetpack Compose",
  "Dicoding Applied Machine Learning to Android",
  "Dicoding JavaScript Programming",
  "Dicoding Front-End Web",
  "Dicoding Back-End Web",
  "Dicoding Python",
  "Dicoding SQL",
  "Dicoding GIT and Github",
  "Dicoding UX Design",
  "Udemy PHP Programming",
  "Dicoding SOLID Programming",
  "Udemy Docker",
] as const;

export const quickFacts = [
  {
    label: "Education",
    value: `${education.degree}, UMMI · GPA ${education.gpa}`,
  },
  {
    label: "Focus",
    value:
      "Full-stack Developer · Android Developer · Applied AI/Machine/Deep Learning to application",
  },
  { label: "Location", value: `${profile.location} · ${profile.relocation}` },
] as const;

export const OWNER_NAME = profile.name;
