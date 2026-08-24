/**
 * Projects data — Source of Truth: docs/06-projects-data.md
 *
 * DO NOT duplicate project data elsewhere. All project information
 * lives in this file. If you need to add/edit/remove a project,
 * edit docs/06-projects-data.md first, then update this file.
 */

export type ProjectCategory = "Mobile" | "Web" | "ML" | "IoT";

export interface Project {
  name: string;
  category: ProjectCategory;
  description: string;
  techTags: string[];
  repos: { label: string; name: string }[];
}

/**
 * Category → Tailwind color class mapping.
 * Colors from 02-design-system.md § Category Colors.
 */
export const CATEGORY_META: Record<
  ProjectCategory,
  { label: string; colorClass: string; bgClass: string }
> = {
  Mobile: {
    label: "Mobile",
    colorClass: "text-cat-mobile",
    bgClass: "bg-cat-mobile/15",
  },
  Web: {
    label: "Web",
    colorClass: "text-cat-web",
    bgClass: "bg-cat-web/15",
  },
  ML: {
    label: "ML / Data",
    colorClass: "text-cat-ml",
    bgClass: "bg-cat-ml/15",
  },
  IoT: {
    label: "IoT / Embedded",
    colorClass: "text-cat-iot",
    bgClass: "bg-cat-iot/15",
  },
};

/** All filter options — "All" + each category */
export const FILTER_OPTIONS: Array<"All" | ProjectCategory> = [
  "All",
  "Mobile",
  "Web",
  "ML",
  "IoT",
];

/**
 * Project list — mapped 1:1 from docs/06-projects-data.md table.
 * Repo URLs generated as: https://github.com/erstuu/{repo}
 */
export const projects: Project[] = [
  {
    name: "DiaFit / DM-Care",
    category: "Mobile",
    description:
      "Android app edukasi & pencegahan diabetes melitus",
    techTags: ["Kotlin", "Android SDK"],
    repos: [
      { label: "DiaFit", name: "DiaFit" },
      { label: "DM-Care", name: "DM-Care" },
    ],
  },
  {
    name: "SFootball",
    category: "Mobile",
    description:
      "Android app jadwal sepak bola",
    techTags: ["Kotlin", "Android SDK", "REST API"],
    repos: [
      { label: "SFootball", name: "SFootball" },
    ],
  },
  {
    name: "Lalajo",
    category: "Mobile",
    description:
      "Android app Movie Review",
    techTags: ["Javascript", "React Native"],
    repos: [
      { label: "Lalajo", name: "Lalajo" },
    ],
  },
  {
    name: "Dicoding-Event",
    category: "Mobile",
    description:
      "Dicoding Event Viewer App",
    techTags: ["Kotlin", "Android SDK", "REST API", "Retrofit", "MVVM"],
    repos: [
      { label: "Dicoding-Event", name: "Dicoding-Event" },
    ],
  },
  {
    name: "Story App",
    category: "Mobile",
    description:
      "People share stories through images",
    techTags: ["Kotlin", "Android SDK", "REST API", "Retrofit", "MVVM"],
    repos: [
      { label: "Story-App", name: "Story-App" },
    ],
  },
  {
    name: "Rainfall Prediction",
    category: "ML",
    description:
      "Prediksi curah hujan pakai Random Forest, dari notebook ke deployed app",
    techTags: ["Python", "scikit-learn", "Jupyter"],
    repos: [
      { label: "Notebook", name: "prediksi-curah-hujan-random-forest" },
      { label: "App", name: "rainfall-app" },
    ],
  },
  {
    name: "Villa Review Sentiment",
    category: "ML",
    description:
      "Dashboard sentiment analysis review villa, pipeline LSTM/Word2Vec",
    techTags: ["TypeScript", "Python", "LSTM"],
    repos: [
      { label: "Dashboard", name: "villa-review-sentiment-analysis-dashboard" },
      {
        label: "Pipeline",
        name: "Pipeline-Analisis-Sentiment-Pengunjung-Villa-LSTM-Word2Vec",
      },
    ],
  },
  {
    name: "Forex EUR/USD Prediction",
    category: "ML",
    description: "Prediksi pergerakan forex pair EUR/USD",
    techTags: ["Python", "Jupyter"],
    repos: [
      {
        label: "View Code",
        name: "UAS-ML-Prediksi-Pergerakan-FOREX-Pair-EURUSD",
      },
    ],
  },
  {
    name: "Alarm Pengingat Tidur",
    category: "IoT",
    description:
      "Project mikrokontroler, alarm pengingat tidur berbasis Arduino",
    techTags: ["C++", "Arduino"],
    repos: [
      { label: "View Code", name: "Alarm-Pengingat-Tidur-Arduino" },
    ],
  },
  {
    name: "lembah-purba-expedition-tour-guide-booking",
    category: "Web",
    description: "Booking Private Tour guide to Lembah Purba Expedition",
    techTags: ["Typescript", "Next.js"],
    repos: [{ label: "View Code", name: "lembah-purba-expedition-tour-guide-booking" }],
  },
  {
    name: "Mejeng",
    category: "Web",
    description: "Web app Laravel (UTS MPPL)",
    techTags: ["PHP", "Laravel"],
    repos: [{ label: "View Code", name: "Mejeng-Laravel-App-v2" }],
  },
  {
    name: "SwimEase",
    category: "Web",
    description:
      "Aplikasi pendaftaran les renang berbasis Laravel",
    techTags: ["PHP", "Laravel", "Blade"],
    repos: [{ label: "View Code", name: "SwimEase" }],
  },
];
