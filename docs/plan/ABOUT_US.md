# About Us Page — Planning

> Route: `/about`
> Memperkenalkan Forsure Digitalindo: visi misi, sambutan CEO, dan tim.
> Data tim bersifat **dinamis via JSON** — mudah diupdate tanpa ubah kode.

---

## Page Structure

```
<AboutPage>
  <AboutHero />              ← hero dengan tagline brand
  <OurStory />               ← brief company story / identity
  <OurPillars />             ← 3 core pillars (Creative, Strategy, Digital Impact)
  <VisionMission />          ← visi dan misi
  <CEOGreeting />            ← sambutan CEO dengan foto
  <OurTeam />                ← grid tim (dari team.json, dinamis)
  <AboutCTA />               ← CTA kontak di bawah
</AboutPage>
```

---

## Sections Detail

### AboutHero

**Visual:**
```
┌──────────────────────────────────────────────────────┐
│  [background: dark gradient atau foto office/team]    │
│                                                       │
│              Tentang Kami                             │
│   Kami adalah tim kreatif yang membantu brand Anda   │
│        tampil profesional di dunia digital.           │
│                                                       │
│         [ Kenalan dengan Tim ↓ ]                     │
└──────────────────────────────────────────────────────┘
```

**UX:**
- CTA scroll ke section `#our-team`
- Background bisa berupa subtle pattern/gradient atau foto tim yang blur/overlay
- Text masuk dengan entrance animation (optional, performance-safe)

---

### OurStory

Paragraf singkat memperkenalkan Forsure Digitalindo.

**Visual:**
```
┌──────────────────────────────────────────────────────┐
│                                                       │
│   Forsure Digitalindo               [brand logo/      │
│                                      illustration]    │
│   Forsure Digitalindo empowers                        │
│   businesses with a professional                      │
│   digital presence through strategic                  │
│   websites, branding, digital content,                │
│   and high-quality photoshoots                        │
│   tailored to today's business landscape.             │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**Layout:** 2-kolom di desktop (teks kiri, visual kanan), stack di mobile.

---

### OurPillars

3 core pillar dalam card sederhana.

**Visual:**
```
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│  [ 🎨 icon ]  │  │  [ 🎯 icon ]  │  │  [ ⚡ icon ]  │
│               │  │               │  │               │
│   Creative    │  │   Strategy    │  │ Digital Impact│
│               │  │               │  │               │
│  Crafting     │  │  Building     │  │  Delivering   │
│  visually     │  │  meaningful   │  │  results that │
│  compelling   │  │  digital      │  │  grow your    │
│  designs...   │  │  presence...  │  │  brand.       │
└───────────────┘  └───────────────┘  └───────────────┘
```

**Komponen:** `<PillarCard>` — reusable dengan icon, title, description.

**Props:**
```ts
type PillarCardProps = {
  icon: LucideIcon
  title: string
  description: string
}
```

**Icon mapping:**
- Creative → `Palette` (lucide-react)
- Strategy → `Target`
- Digital Impact → `Zap`

---

### VisionMission

**Visual (Desktop — 2 panel):**
```
┌─────────────────────────┬─────────────────────────┐
│                         │                         │
│   VISI                  │   MISI                  │
│   ─────                 │   ─────                 │
│                         │                         │
│   [teks visi            │   • Poin misi 1         │
│    Forsure]             │   • Poin misi 2         │
│                         │   • Poin misi 3         │
│                         │                         │
└─────────────────────────┴─────────────────────────┘
```

**Mobile:** Stack vertikal (Visi dulu, Misi di bawah).

**Komponen:** `<VisionMission>` — self-contained section, data hardcoded di komponen atau dari `src/config/site.ts`.

> **Note:** Visi & Misi belum ada di PDF — perlu diisi oleh klien. Siapkan placeholder yang jelas.

---

### CEOGreeting

Sambutan dari CEO disertai foto.

**Visual (Desktop):**
```
┌────────────────────────────────────────────────────┐
│                                                     │
│   [Foto CEO          "Sambutan dari CEO..."         │
│    — square/         Paragraf sambutan berisi       │
│    rounded,          visi, motivasi, dan            │
│    professional]     komitmen perusahaan.           │
│                                                     │
│                      — Nama CEO                     │
│                        CEO & Co-Founder             │
│                        Forsure Digitalindo          │
│                                                     │
└────────────────────────────────────────────────────┘
```

**Mobile:** Foto di atas, teks di bawah (stack vertikal).

**Komponen:** `<CEOGreeting>` — Server Component.

**Props:**
```ts
type CEOGreetingProps = {
  photo: string        // path ke /images/team/ceo.jpg
  quote: string        // teks sambutan (bisa multi-paragraph)
  name: string
  title: string
}
```

**File Structure:**
```
src/components/sections/about/CEOGreeting/
  index.tsx
  CEOGreeting.tsx
  CEOGreeting.stories.tsx
  CEOGreeting.test.tsx
```

**Image spec:**
- Format: WebP (Next.js `<Image>` optimize otomatis)
- Aspect ratio: 3:4 (portrait) atau 1:1 (square)
- Placeholder: blur placeholder via `placeholder="blur"`

---

### OurTeam

Grid tim yang **dinamis** — data dari `src/data/team.json`.
Untuk menambah anggota tim baru cukup edit JSON, tidak perlu ubah kode.

**Visual (Desktop — 3 atau 4 kolom):**
```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│  [foto]  │  │  [foto]  │  │  [foto]  │  │  [foto]  │
│          │  │          │  │          │  │          │
│  Nama    │  │  Nama    │  │  Nama    │  │  Nama    │
│  Role    │  │  Role    │  │  Role    │  │  Role    │
│  [IG]    │  │  [IG]    │  │  [IG]    │  │  [IG]    │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

**Mobile:** 2 kolom.

**Data: `src/data/team.json`**
```json
[
  {
    "id": "1",
    "name": "Nama CEO",
    "role": "CEO & Co-Founder",
    "photo": "/images/team/ceo.jpg",
    "bio": "Deskripsi singkat (optional)",
    "social": {
      "instagram": "https://instagram.com/handle",
      "linkedin": "https://linkedin.com/in/handle"
    }
  },
  {
    "id": "2",
    "name": "Nama Anggota",
    "role": "Creative Director",
    "photo": "/images/team/member-2.jpg",
    "bio": "",
    "social": {
      "instagram": "https://instagram.com/handle"
    }
  }
]
```

**Komponen:** `<TeamMemberCard>` + `<OurTeam>` (container yang load JSON).

**Props:**
```ts
// team.json shape
type TeamMember = {
  id: string
  name: string
  role: string
  photo: string
  bio?: string
  social?: {
    instagram?: string
    linkedin?: string
  }
}

// TeamMemberCard.tsx props
type TeamMemberCardProps = TeamMember
```

**File Structure:**
```
src/components/
  sections/about/OurTeam/
    index.tsx
    OurTeam.tsx              ← loads team.json, renders grid
    OurTeam.stories.tsx
    OurTeam.test.tsx
  ui/TeamMemberCard/
    index.tsx
    TeamMemberCard.tsx
    TeamMemberCard.stories.tsx
    TeamMemberCard.test.tsx

src/data/
  team.json
```

**UX:**
- Hover: foto slight scale up (1.05) + overlay nama/role → smooth transition
- Foto menggunakan Next.js `<Image>` dengan `object-fit: cover`
- Fallback jika foto tidak ada: initials avatar dengan background warna brand

---

### AboutCTA

Section penutup di bawah halaman About.

**Visual:**
```
┌──────────────────────────────────────────────────────┐
│                                                       │
│     Tertarik Bekerja Sama dengan Kami?                │
│   Kami siap membantu brand Anda tampil lebih kuat.   │
│                                                       │
│        [ Hubungi Kami ]   [ Lihat Services ]          │
│                                                       │
└──────────────────────────────────────────────────────┘
```

---

## UX Flow

```
User buka /about
  → AboutHero tampil
  → Scroll → OurStory (company identity)
  → Scroll → OurPillars (3 card animasi masuk)
  → Scroll → VisionMission (2 panel)
  → Scroll → CEOGreeting (foto + quote)
  → Scroll → OurTeam (grid dengan hover effect)
  → Scroll → AboutCTA
  → Klik "Hubungi Kami" → link WhatsApp atau /contact
  → Klik "Lihat Services" → navigate ke /services
```

---

## SEO

- `generateMetadata()` wajib panggil `buildMetadata()`
- `<StructuredData>` dengan type `Organization`
  - Sertakan: name, url, logo, contactPoint, sameAs (social links)
- Page title: `"About Us — Forsure Digitalindo"`
- Description: company tagline + deskripsi singkat

---

## File Locations (Next.js App Router)

```
src/app/[locale]/about/
  page.tsx                              ← Server Component, generateMetadata

src/components/
  sections/about/
    AboutHero/
      index.tsx
      AboutHero.tsx
      AboutHero.stories.tsx
      AboutHero.test.tsx
    OurStory/
      index.tsx
      OurStory.tsx
    OurPillars/
      index.tsx
      OurPillars.tsx
    VisionMission/
      index.tsx
      VisionMission.tsx
    CEOGreeting/
      index.tsx
      CEOGreeting.tsx
    OurTeam/
      index.tsx
      OurTeam.tsx
    AboutCTA/
      index.tsx
      AboutCTA.tsx
  ui/
    TeamMemberCard/
    PillarCard/
    SectionHeader/                      ← reusable dari Service page juga

src/data/
  team.json
```

---

## Informasi yang Perlu Diisi Klien

> Berikut adalah konten yang belum tersedia di PDF dan harus diisi oleh klien sebelum implementasi:

| Item | Keterangan |
|---|---|
| **Visi** | Teks visi perusahaan |
| **Misi** | Poin-poin misi (bisa 3-5 poin) |
| **Sambutan CEO** | Paragraf sambutan, nama lengkap CEO, jabatan |
| **Foto CEO** | File foto profesional (portrait, min 800×1000px) |
| **Data Tim** | Nama, jabatan, foto, link sosmed per anggota |
| **Company Story** | Paragraf singkat sejarah/identitas Forsure (opsional) |
