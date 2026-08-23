# 04 — Sections: Skills & Featured Projects

Uses tokens from `02-design-system.md`. Project data sourced from `06-projects-data.md`.

## Skills
4 kategori card (grid 2x2 desktop, stack mobile):
1. **Mobile Development** — Kotlin, Android SDK, Firebase
2. **Web Development** — PHP/Laravel, JavaScript, TypeScript, React
3. **Data Science / ML** — Python, Jupyter, scikit-learn, pandas
4. **Embedded Systems / IoT** — C++, Arduino, mikrokontroler

Tiap kategori: icon besar di atas, tech badges (pill, monospace font, warna
sesuai kategori dari `02-design-system.md` § Category Colors).

## Featured Projects (card grid + filter)
- Filter bar: `All | Mobile | Web | ML | IoT` (pill button, active state = `--accent`)
- Card structure:
  ```
  [category tag - top corner, colored]
  Project Name (bold)
  Short description (2 lines max, --text-secondary)
  Tech stack tags (monospace pill, kecil)
  [GitHub icon + "View Code"] [optional: Live Demo link]
  ```
- Hover: `translateY(-4px)` + glow border accent (lihat `02-design-system.md` shadow spec)
- Data project (nama, deskripsi, kategori, tech tags, link) → **JANGAN** ditulis
  ulang di sini, ambil dari `06-projects-data.md`.

## Sync Note
- Tambah/hapus/edit project → edit `06-projects-data.md` SAJA. Section ini hanya
  mendefinisikan tampilan/struktur card, bukan isi datanya.
- Tambah kategori project baru (misal "Game Dev") → update 3 tempat sekaligus:
  1. `02-design-system.md` § Category Colors (tambah warna)
  2. File ini § Filter bar (tambah opsi filter)
  3. `06-projects-data.md` (tag project yang relevan)
