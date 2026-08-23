# 07 — Interactions & Animation

Uses Framer Motion (see `01-tech-stack.md`). Applies across all sections in `03`, `04`, `05`.

- **Scroll reveal**: fade-in + `translateY(20px → 0)` saat section masuk viewport
  (`whileInView` di Framer Motion)
- **Dark/light toggle**: `transition-colors duration-300` di elemen utama
- **Project filter (`04-sections-skills-projects.md`)**: pakai `AnimatePresence`
  biar transisi antar filter halus, bukan jump/snap
- **Button hover**: `scale(1.02)` + glow shadow (token dari `02-design-system.md`) —
  jangan berlebihan, tetap "clean, dev-focused"
- **Project card hover**: `translateY(-4px)` + border glow (lihat `02-design-system.md`
  § Spacing & Layout untuk shadow spec)

## Sync Note
Kalau ganti animation library (misal dari Framer Motion ke GSAP), update file ini
DAN `01-tech-stack.md` bareng.
