# 03 — Sections: Navbar, Hero, About Me

Uses tokens from `02-design-system.md`. Persona/tagline text sourced from `00-overview.md`.

## Navbar (sticky)
- Logo: `> erstuu` — monospace font, `--accent` color, terminal-style prefix
- Menu: About, Skills, Projects, Contact
- Toggle dark/light (icon sun/moon)
- Mobile: hamburger → slide-in drawer

## Hero Section
- Layout: teks kiri, kanan bisa avatar/ilustrasi abstract atau kosong
- Struktur:
  ```
  [badge] "👋 Informatics Engineering Student"
  H1: "Restu Gede Purnama"
  H2 (accent, monospace): "Long Life Learner"
  Paragraph: 2-3 kalimat intro (full-stack + mobile + ML/IoT)
  [Button primary: View Projects] [Button outline: Contact Me]
  [icon row: GitHub | LinkedIn]
  ```
- Optional: typing animation di role text ("Mobile Developer / Web Developer / ML Enthusiast")
  — animasi detail lihat `07-interactions-animation.md`

## About Me
- 2 kolom: bio kiri, "quick facts" card kanan (status: Informatics student,
  focus area, current project)
- Boleh selipkan minat riset (thesis assistance, CRISP-DM projects) — konsisten
  dengan persona di `00-overview.md`

## Sync Note
- Kalau tagline/persona di `00-overview.md` berubah → update teks Hero & About di sini.
- Kalau warna/font berubah → cek `02-design-system.md`, jangan hardcode baru di sini.
