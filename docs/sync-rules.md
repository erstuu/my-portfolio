# sync-rules.md
**Baca file ini setiap kali mau mengedit fitur/section apa pun di project ini.**
File ini mendefinisikan file mana yang saling terhubung, biar dokumentasi
(dan kode yang di-generate darinya) tetap konsisten.

## Prinsip Utama
1. Setiap file `.md` di folder ini adalah **source of truth** untuk topiknya masing-masing.
2. Jangan duplikasi informasi antar file — kalau butuh data yang sama di 2 tempat,
   file yang bukan "pemilik" data harus **refer**, bukan copy-paste ulang.
3. Sebelum edit satu file, cek tabel "Dependency Map" di bawah untuk tahu file
   lain mana yang mungkin perlu ikut disesuaikan.
4. Setelah edit, jalankan mental checklist di bagian "Consistency Checklist".

## Dependency Map

| Kalau saya edit... | Cek & sesuaikan juga... | Kenapa |
|---|---|---|
| `00-overview.md` (persona/tagline/tone) | `03-sections-navbar-hero-about.md` | Hero & About pakai teks persona langsung |
| `01-tech-stack.md` (ganti framework/library) | `02-design-system.md`, `07-interactions-animation.md` | Implementasi CSS variables & animasi tergantung stack |
| `02-design-system.md` (tambah/ubah warna, font, spacing) | `03`, `04`, `05` (semua section file), `06-projects-data.md` kalau nambah kategori | Semua section pakai token dari sini |
| `02-design-system.md` § Category Colors (tambah kategori project baru) | `04-sections-skills-projects.md` (filter bar), `06-projects-data.md` (tag project) | Filter & data harus punya kategori yang sama |
| `03-sections-navbar-hero-about.md` (ganti social links) | `05-sections-stats-timeline-contact.md` (Contact & Footer) | Link sosial muncul di 3 tempat: Hero, Contact, Footer |
| `04-sections-skills-projects.md` (ganti struktur card) | `06-projects-data.md` | Pastikan field data yang dibutuhkan card masih tersedia di tabel data |
| `06-projects-data.md` (tambah/hapus project) | Tidak perlu edit file lain, KECUALI kategorinya baru → lihat baris di atas | Ini source of truth data project |
| `07-interactions-animation.md` (ganti animation style) | `01-tech-stack.md` kalau ganti library | Biar tech stack & animasi tetap sinkron |

## Consistency Checklist (jalankan tiap habis edit)
- [ ] Apakah ada hex/warna baru yang aku tulis langsung di section file, padahal
      seharusnya jadi token baru di `02-design-system.md`?
- [ ] Apakah ada teks persona/tagline yang aku ubah di section file, padahal
      seharusnya diubah dulu di `00-overview.md`?
- [ ] Apakah ada data project yang aku tulis langsung di section file, padahal
      seharusnya di `06-projects-data.md`?
- [ ] Kalau aku ganti social link / kontak, sudah ku-update di ketiga tempat
      (Hero, Contact, Footer)?
- [ ] Kalau aku tambah kategori project baru, sudah konsisten di 3 file
      (design-system, skills-projects, projects-data)?

## Instruksi untuk AI Coding Agent (Antigravity)
> Prompt ini bisa kamu tempel di awal sesi Antigravity, atau taruh sebagai
> instruksi standing di root project (misal `AGENTS.md`):

```
Kamu bekerja dengan dokumentasi desain yang terpisah jadi beberapa file .md
di folder /docs. Sebelum mengedit fitur atau section apa pun:

1. Baca sync-rules.md terlebih dahulu.
2. Cek "Dependency Map" untuk tahu file lain yang perlu ikut disesuaikan.
3. Jangan menduplikasi data (warna, teks persona, data project) di file yang
   bukan pemiliknya — selalu refer ke source of truth file.
4. Setelah selesai edit, jalankan "Consistency Checklist" di sync-rules.md dan
   laporkan ke saya file mana saja yang ikut kamu update dan kenapa.
5. Kalau perubahan yang saya minta membuat 2 file jadi tidak konsisten
   (misal saya minta ganti warna accent tapi lupa update di semua tempat yang
   pakai), beri tahu saya sebelum lanjut — jangan diam-diam dibiarkan beda.
```

## File Index
- `00-overview.md` — persona & entry point
- `01-tech-stack.md` — framework & library
- `02-design-system.md` — colors, typography, spacing (source of truth visual)
- `03-sections-navbar-hero-about.md`
- `04-sections-skills-projects.md`
- `05-sections-stats-timeline-contact.md`
- `06-projects-data.md` — source of truth data project
- `07-interactions-animation.md`
