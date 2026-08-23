# 05 — Sections: GitHub Stats, Timeline, Contact, Footer

Uses tokens from `02-design-system.md`.

## GitHub Stats / Activity
- Embed image: `github-readme-stats` atau `github-readme-activity-graph`,
  tema disesuaikan warna `--accent` (teal)
- Atau custom widget: total repos, top language, contribution streak
- Style: card dark, border tipis, konsisten sama project card (`04-sections-skills-projects.md`)

## Experience / Education Timeline
- Vertical timeline (dot + line, `--accent`)
- Isi: status mahasiswa Informatika, fokus mata kuliah relevan, pengalaman
  kolaborasi thesis (dibingkai sebagai "peer collaboration / research assistance")
- Tiap item: periode, judul, deskripsi singkat

## Contact
- 2 kolom: form kiri (Name, Email, Message — `react-hook-form` + `zod`),
  info kanan (email, GitHub, LinkedIn)
- Button submit: solid `--accent`, loading state saat submit

## Footer
- `© 2026 Restu Gede Purnama — Built with Next.js & Tailwind` + icon links
  (GitHub, LinkedIn) — sama seperti icon row di Hero (`03-sections-navbar-hero-about.md`)

## Sync Note
- Ganti link sosial (GitHub/LinkedIn) → update di SEMUA tempat yang refer:
  Hero (`03`), Contact, dan Footer di file ini — jangan cuma satu tempat.
- Ganti tahun/nama di footer → cek `00-overview.md` kalau nama/persona berubah.
