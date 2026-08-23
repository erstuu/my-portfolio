# 01 — Tech Stack

## Core
| Layer | Choice | Alasan |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | SSG/SSR bagus buat SEO, gampang deploy ke Vercel |
| Language | **TypeScript** | Konsisten sama repo `villa-review-sentiment-analysis-dashboard` |
| Styling | **Tailwind CSS** | Cepat buat dark mode + responsive |
| Animation | **Framer Motion** | Hover, scroll reveal, transisi tema |
| Icons | **Lucide Icons** / **Simple Icons** | Tech badges & UI icons |
| Fonts | Google Fonts (lihat `02-design-system.md`) | Gratis, mudah embed |
| Deployment | **Vercel** | Auto-deploy dari GitHub |
| Data Source | Local `06-projects-data.md` → `projects.ts`/`projects.json` | Kontrol penuh, tanpa rate limit API |

## Optional Enhancements
- `react-github-calendar` atau `github-readme-stats` (img embed) → GitHub Activity section
- `react-hook-form` + `zod` → validasi form contact
- `next-themes` → dark/light toggle persist ke localStorage

## Sync Note
Kalau stack berubah (misal ganti Next.js → Vite, atau Tailwind → CSS Modules),
update file ini DAN cek `sync-rules.md` bagian "Tech Stack Change" — karena
implementasi warna (CSS variables), animasi (Framer Motion syntax), dan struktur
folder di file lain mengasumsikan stack ini.
