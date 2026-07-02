# Starting Prompt — Forsure Digitalindo Web

> Paste seluruh isi file ini sebagai pesan pertama di sesi Claude baru.
> Update bagian **[TASK]** sebelum paste sesuai task yang mau dikerjakan.

---

```
Kamu sedang membangun website untuk Forsure Digitalindo — sebuah agency digital
yang menjual jasa website, creative content, dan photoshoot profesional.

---

## BACA DULU SEBELUM MULAI

Sebelum mengerjakan apapun, baca file-file ini secara berurutan:

1. docs/knowledge/THIS.md     — profil developer, do's & don'ts, insights
2. docs/knowledge/LEARN.md    — kesalahan masa lalu yang tidak boleh diulang
3. docs/blueprint/INDEX.md    — peta seluruh blueprint + hard constraints

Setelah membaca 3 file di atas, identifikasi blueprint mana yang relevan
dengan task saat ini, baca blueprint tersebut, lalu mulai bekerja.

---

## Identitas Brand

**Nama:** Forsure Digitalindo
**Tagline:** Your Brand Deserves to Be Seen
**Jenis:** Agency digital — menjual jasa, bukan produk SaaS
**Kontak:**
  - Phone / WA: +62 897-0297-969
  - Email: forsure.digitalindo@gmail.com
  - Instagram: @forsure.ids

**3 Core Pillars:**
  - Creative — Crafting visually compelling designs and content
  - Strategy — Building meaningful digital presence with purpose
  - Digital Impact — Delivering results that grow your brand

---

## Design Direction: Luxury Noir Agency

Bukan luxury brand seperti fashion house. Ini agency premium yang serius.
Analoginya: Pentagram, R/GA — bukan Chanel.

**Palette:**
  - Background: oklch(0.073 0 0) — pure neutral black, nol chroma
  - Foreground: oklch(0.82 0 0) — silver, bukan putih stark
  - Primary: oklch(0.768 0.131 83.5) — gold (#D4AF37), HANYA untuk CTA dan aksen kritis
  - Semua warna via design token — tidak boleh ada raw hex di JSX

**Typography:**
  - font-display (Cormorant Garamond) — HANYA untuk hero headline dan tagline besar
  - font-sans (Outfit) — semua body, UI, navigasi, label, heading kecil
  - Jangan mix kedua font di ukuran yang sama

**Icon:**
  - Sangat minimal — hanya di tempat yang benar-benar fungsional
  - Tidak boleh pakai icon sebagai dekorasi atau filler
  - Web ini harus terasa typographic dan editorial, bukan icon-heavy

---

## Stack

Next.js 16 · TypeScript 6 (strict) · Tailwind v4 · next-intl v4 ·
TanStack Query v5 · Zustand v5 · Zod v4 · Sonner · Sentry · PostHog

---

## Non-Negotiables (Hard Rules)

1. Navigasi SELALU dari `@/i18n/navigation` — tidak pernah dari `next/navigation`
2. `'use client'` hanya kalau butuh hook / event / browser API
3. Data server: TanStack Query — tidak pernah useState untuk API response
4. Warna: design token only — tidak boleh raw hex, oklch, atau Tailwind color utils
5. `npm run lint` harus exit 0 sebelum task selesai
6. Request intercept / proxy: `src/middleware.ts` + `src/proxy/` — BUKAN root `proxy.ts`
7. Setiap public page wajib `buildMetadata()` + `<StructuredData>`
8. Service adalah plain object — tidak boleh fetch langsung dari komponen
9. Semua komponen UI: empat file (impl, stories, test, barrel) + `displayName`
10. `localePrefix` harus `'always'` — tidak pernah `'as-needed'`

---

## Pelajaran Kritis dari Masa Lalu (LEARN.md)

- JANGAN gunakan root `proxy.ts` — ada confirmed bug di Next.js 16 production mode
  dan Windows. Selalu pakai `src/middleware.ts` (export `middleware`)
- JANGAN import apapun dari `next/navigation` — bahkan di provider/analytics files
  Gunakan `@/i18n/navigation` dan `useLocale` dari `next-intl`
- `localePrefix: 'as-needed'` menyebabkan route tanpa prefix locale — selalu `'always'`
- Cek default branch repo (`main`) sebelum push pertama — jangan assume `master`

---

## Page Plan (sudah ada di docs/plan/)

| File | Halaman | Status |
|---|---|---|
| docs/plan/NAVBAR_FOOTER.md | Navbar & Footer | planned |
| docs/plan/SERVICE.md | /services | planned |
| docs/plan/ABOUT_US.md | /about | planned |
| docs/plan/LANDING.md | / (homepage) | planned |
| docs/plan/INDEX.md | Index + brand identity summary | — |

**Prioritas:** Navbar/Footer → Services → About Us → Landing Page → Portfolio

---

## Source of Truth Files

| File | Isi |
|---|---|
| src/config/site.ts | Brand, kontak, SEO, page registry — edit PERTAMA saat ada page baru |
| src/app/globals.css | Semua design token (@theme {}) |
| src/app/[locale]/layout.tsx | Font loading (Outfit + Cormorant + JetBrains Mono) |
| docs/blueprint/ | Arsitektur, komponen, desain, i18n, SEO — source of truth teknis |

---

## Cara Pakai font-display

Cormorant Garamond tersedia via utility class `font-display`:

  <h1 className="font-display text-6xl font-light italic text-foreground">
    Your Brand Deserves<br />
    <em>to Be Seen.</em>
  </h1>

Hanya untuk headline hero, tagline besar, pull-quote. Bukan untuk nav/body/label.

---

## Import Paths Kanonik

  import { cn }                          from '@/lib/cn'
  import { Link, useRouter, redirect }   from '@/i18n/navigation'
  import { Button, Input, Typography }   from '@/components/ui'
  import { Header, Footer }              from '@/components/layout'
  import { buildMetadata }               from '@/lib/seo'
  import { StructuredData }              from '@/components/ui'
  import { apiClient }                   from '@/services'
  import { useAppStore }                 from '@/stores'

---

## [TASK]

< Tulis task spesifik di sini sebelum paste prompt ini ke Claude >

Contoh:
  - "Buat komponen Navbar sesuai docs/plan/NAVBAR_FOOTER.md"
  - "Implementasi halaman /services sesuai docs/plan/SERVICE.md"
  - "Update src/config/site.ts dengan data brand Forsure Digitalindo yang benar"
```
