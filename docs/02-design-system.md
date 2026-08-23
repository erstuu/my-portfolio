# 02 — Design System

## Color Palette

Base mood: dark neutral + satu accent vibrant. Accent dipilih **teal**.

### Dark Mode (default)
| Token | Hex | Fungsi |
|---|---|---|
| `--bg-primary` | `#0A0E14` | Background utama |
| `--bg-secondary` | `#111722` | Card / section background |
| `--bg-tertiary` | `#1A2230` | Hover state, input field |
| `--border` | `#232B3A` | Border tipis antar elemen |
| `--text-primary` | `#E6EAF2` | Heading, teks utama |
| `--text-secondary` | `#8A94A6` | Body text, deskripsi |
| `--text-muted` | `#5C6577` | Caption, label kecil |
| `--accent` | `#2DD4BF` | Teal — CTA, link, highlight |
| `--accent-hover` | `#5EEAD4` | Hover state accent |
| `--accent-muted` | `#134E4A` | Background badge/tag |
| `--success` | `#4ADE80` | Status indicator |
| `--warning` | `#FBBF24` | Optional badge |

### Light Mode (toggle)
| Token | Hex |
|---|---|
| `--bg-primary` | `#FAFBFC` |
| `--bg-secondary` | `#FFFFFF` |
| `--bg-tertiary` | `#F0F2F5` |
| `--border` | `#E2E5EA` |
| `--text-primary` | `#0F172A` |
| `--text-secondary` | `#475569` |
| `--text-muted` | `#94A3B8` |
| `--accent` | `#0D9488` |
| `--accent-hover` | `#0F766E` |

### Category Colors (project filter tags)
| Kategori | Warna | Hex |
|---|---|---|
| Mobile | Purple | `#A78BFA` |
| Web | Blue | `#60A5FA` |
| ML / Data | Teal (= accent) | `#2DD4BF` |
| IoT / Embedded | Orange | `#FB923C` |

> Kategori ini dipakai di `04-sections-skills-projects.md` (filter bar & card tag)
> dan `06-projects-data.md` (field `category`). Kalau tambah kategori baru,
> update ketiga file ini bareng — lihat `sync-rules.md`.

## Typography
| Elemen | Font | Fallback |
|---|---|---|
| Heading / Display | Space Grotesk / Sora | sans-serif |
| Body text | Inter | sans-serif |
| Code / badges / monospace UI | JetBrains Mono / Fira Code | monospace |

### Scale (mobile-first, rem)
```
--text-xs:   0.75rem   (12px)
--text-sm:   0.875rem  (14px)
--text-base: 1rem      (16px)
--text-lg:   1.125rem  (18px)
--text-xl:   1.5rem    (24px)   section title mobile
--text-2xl:  2rem      (32px)   section title desktop
--text-3xl:  2.75rem   (44px)   hero title mobile
--text-4xl:  4rem      (64px)   hero title desktop
```

## Spacing & Layout
- Max content width: `1200px`, padding horizontal `1.5rem` mobile / `2rem` desktop
- Section vertical spacing: `5rem` mobile, `8rem` desktop
- Grid project cards: 1 col mobile → 2 col tablet → 3 col desktop
- Border radius: `12px` card, `8px` button/badge, `9999px` pill tag
- Card hover shadow (dark mode):
  ```css
  box-shadow: 0 0 0 1px var(--border);
  /* hover */
  box-shadow: 0 0 0 1px var(--accent), 0 8px 24px rgba(45,212,191,0.15);
  ```

## Sync Note
File ini adalah **source of truth untuk semua visual token**. Semua section file
(`03`, `04`, `05`) HARUS pakai token dari sini, bukan hex/value baru. Kalau butuh
warna/spacing baru saat develop salah satu section, tambahkan tokennya DI SINI dulu,
baru dipakai di file section terkait.
