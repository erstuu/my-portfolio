export type Category = "Mobile" | "Web" | "AI/ML" | "Other";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  category: Category;
  period: string;
  role: string;
  headline: string;
  metric?: ProjectMetric;
  highlights: string[];
  stack: string[];
  repos: string[];
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

export interface ArchiveProject {
  id: string;
  name: string;
  category: Category;
  description: string;
  stack: string[];
  repos: string[];
}

export const featuredProjects: Project[] = [
  {
    id: "villa-sentiment-analyzer",
    name: "Villa Sentiment Analyzer",
    category: "AI/ML",
    period: "Nov 2025 – Jun 2026",
    role: "Full-Stack Developer (web + AI analytics)",
    headline:
      "Turns a pile of villa reviews into a business dashboard — in seconds.",
    metric: {
      value: "1,000+",
      label: "reviews classified in under 5 seconds",
    },
    highlights: [
      "Developed and deployed a responsive React.js and TypeScript web app on Vercel, automating batch CSV review processing to classify 1,000+ customer reviews in under 5 seconds via a Python LSTM deep learning model.",
      "Reduced manual sentiment analysis workload by ~85% through automated text preprocessing, tokenization, RESTful API integration, and an interactive Business Intelligence dashboard.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Python",
      "LSTM",
      "Word2Vec",
      "REST API",
      "Vercel",
    ],
    repos: [
      "villa-review-sentiment-analysis-dashboard",
      "Pipeline-Analisis-Sentiment-Pengunjung-Villa-LSTM-Word2Vec",
    ],
    image: "/projects/villa-sentiment-analyzer-dashboard.png",
    featured: true,
  },
  {
    id: "renangku",
    name: "RenangKu",
    category: "Web",
    period: "Jun 2025 – Jul 2025",
    role: "Full-Stack Developer",
    headline: "Ticketing and daily operations, streamlined end to end.",
    metric: {
      value: "~60%",
      label: "streamlined daily ticketing & operational workflows",
    },
    highlights: [
      "Engineered an end-to-end web application using PHP (Laravel, Eloquent ORM), React.js (TypeScript), and PostgreSQL/MySQL, streamlining daily ticketing and operational workflows by ~60%.",
      "Designed 10+ normalized relational database tables and secure RESTful APIs with role-based access control, delivering 100% of sprint milestones on schedule under Agile/Kanban workflows.",
    ],
    stack: [
      "PHP",
      "Laravel",
      "Eloquent ORM",
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
    ],
    repos: ["web-renangku"],
    featured: true,
  },
  {
    id: "dmcare-nurse",
    name: "DMCare Nurse",
    category: "Mobile",
    period: "Feb 2025 – Mar 2025",
    role: "Android Developer (native Kotlin)",
    headline:
      "Structured Type 2 diabetes self-monitoring, in a native Android app.",
    metric: { value: "8 weeks", label: "delivered across 2 academic faculties" },
    highlights: [
      "Architected and delivered a native Kotlin Android application across 2 academic faculties within an 8-week timeline, integrating automated BMI calculation and blood glucose risk classification modules.",
      "Achieved 100% functional completion across 4 core clinical assessment screens, enabling structured Type 2 diabetes self-monitoring and educational outreach.",
    ],
    stack: ["Kotlin", "Android SDK"],
    repos: ["DM-Care"],
    image: "/projects/DM Care Nurse.png",
    featured: true,
  },
  {
    id: "glucoguide",
    name: "GlucoGuide",
    category: "Mobile",
    period: "Nov 2024 – Dec 2024",
    role: "Android Developer, member of a 5-person cross-functional team",
    headline: "Real-time diabetes risk prediction, backed by an ML API.",
    metric: { value: "<2 s", label: "API inference response time" },
    highlights: [
      "Collaborated in a 5-member cross-functional team to build a Kotlin Android app (MVVM, Jetpack Compose, Firebase) integrating a Machine Learning REST API for real-time diabetes risk prediction.",
      "Delivered 5+ core user flows (risk screening, glucose logging, health analytics) with <2-second API inference response time and zero critical crash defects during user testing.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "REST API"],
    repos: ["https://github.com/reiirei/Gluco-Guide"],
    image: "/projects/Gluco Guide.png",
    featured: true,
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    id: "villa-lstm-pipeline",
    name: "Villa Sentiment — LSTM Pipeline",
    category: "AI/ML",
    description:
      "Model deep learning LSTM + Word2Vec untuk klasifikasi sentimen ulasan villa",
    stack: ["Python", "LSTM", "Word2Vec", "Jupyter"],
    repos: ["Pipeline-Analisis-Sentiment-Pengunjung-Villa-LSTM-Word2Vec"],
  },
  {
    id: "mejeng",
    name: "Mejeng",
    category: "Web",
    description: "Web app Laravel (UTS MPPL)",
    stack: ["PHP", "Laravel"],
    repos: ["Mejeng-Laravel-App-v2"],
  },
  {
    id: "alarm-pengingat-tidur",
    name: "Alarm Pengingat Tidur",
    category: "Other",
    description: "Alarm pengingat tidur berbasis Arduino",
    stack: ["C++", "Arduino"],
    repos: ["Alarm-Pengingat-Tidur-Arduino"],
  },
];

// Turns a bare repo name into a GitHub URL; full URLs pass through untouched.
export function repoUrl(repo: string): string {
  return repo.startsWith("http")
    ? repo
    : `https://github.com/erstuu/${repo}`;
}

// Finds a featured project by id, for linking experience entries to the sheet.
export function getProjectById(id: string): Project | undefined {
  return featuredProjects.find((project) => project.id === id);
}
