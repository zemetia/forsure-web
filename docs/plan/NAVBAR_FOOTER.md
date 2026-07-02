# Navbar & Footer — Planning

> Komponen shared layout yang muncul di semua halaman.
> Harus profesional, ringan, dan konsisten di seluruh site.

---

## Navbar

### Struktur Visual

```
[ FORSURE logo ]   Home   Services   Portfolio   About Us   [ Hubungi Kami → ]
```

Mobile (hamburger):
```
[ FORSURE logo ]                                            [ ☰ ]
↓ drawer/sheet dari kanan atau top
  Home
  Services
  Portfolio
  About Us
  [ Hubungi Kami ]
```

### Behavior & UX

| State | Behavior |
|---|---|
| Default | Transparent background saat di top halaman |
| Scrolled (>80px) | Solid background + backdrop-blur, subtle border-bottom |
| Active route | Link diberi highlight / underline token warna brand |
| Mobile | Hamburger menu → Sheet/Drawer component dari shadcn |
| CTA button | Warna brand, rounded, hover dengan subtle scale atau glow |

### Komponen yang Dipakai

| Komponen | Sumber | Keterangan |
|---|---|---|
| `<Navbar>` | custom | Server Component, `'use client'` hanya untuk scroll state |
| `<NavLink>` | custom | Wrapper `<Link>` dari `@/i18n/navigation` |
| `<Sheet>` | shadcn/ui | Mobile drawer |
| `<Button>` | shadcn/ui (custom CVA) | CTA "Hubungi Kami" |
| Logo | `<Image>` Next.js | SVG atau PNG brand logo |

### File Structure

```
src/components/layout/Navbar/
  index.tsx          ← barrel
  Navbar.tsx         ← main component
  NavLink.tsx        ← single nav link with active state
  MobileMenu.tsx     ← Sheet-based mobile menu
  Navbar.stories.tsx
  Navbar.test.tsx
```

### Props & State

```ts
// Navbar.tsx — Server Component
// scroll behavior via 'use client' child hook

// NavLink.tsx
type NavLinkProps = {
  href: string
  label: string
}

// MobileMenu.tsx
type MobileMenuProps = {
  links: NavLinkProps[]
}
```

### Nav Links

```ts
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About Us' },
]
```

---

## Footer

### Struktur Visual (Desktop — 4 kolom)

```
┌─────────────────────────────────────────────────────┐
│  [ FORSURE logo ]     Halaman      Layanan    Kontak │
│  Your Brand Deserves  Home         Website    Phone  │
│  to Be Seen.          Services     Creative   Email  │
│                       Portfolio    Photoshoot IG     │
│  [IG] [Email] [WA]    About Us                      │
├─────────────────────────────────────────────────────┤
│  © 2025 Forsure Digitalindo. All rights reserved.   │
└─────────────────────────────────────────────────────┘
```

Mobile: Stack vertikal, accordion optional untuk kolom link.

### Komponen yang Dipakai

| Komponen | Sumber | Keterangan |
|---|---|---|
| `<Footer>` | custom | Server Component |
| `<FooterColumn>` | custom | Kolom link dengan heading |
| `<SocialIcon>` | custom / lucide-react | Icon link sosmed |
| `<Link>` | `@/i18n/navigation` | Semua internal links |

### File Structure

```
src/components/layout/Footer/
  index.tsx
  Footer.tsx
  FooterColumn.tsx
  Footer.stories.tsx
  Footer.test.tsx
```

### Footer Data

Data footer di-drive dari `src/config/site.ts` (sesuai blueprint SEO_GEO_LLM.md):

```ts
// src/config/site.ts (extend)
export const siteConfig = {
  name: 'Forsure Digitalindo',
  tagline: 'Your Brand Deserves to Be Seen',
  contact: {
    phone: '+62 897-0297-969',
    email: 'forsure.digitalindo@gmail.com',
    instagram: 'https://instagram.com/forsure.ids',
    website: 'https://www.cosurengroup.com',
  },
  footerLinks: {
    pages: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'About Us', href: '/about' },
    ],
    services: [
      { label: 'Website Solutions', href: '/services#website' },
      { label: 'Creative Content', href: '/services#creative' },
      { label: 'Photoshoot', href: '/services#photoshoot' },
    ],
  },
}
```

### UX Notes

- Footer selalu `position: static` — tidak sticky
- Copyright year auto dari `new Date().getFullYear()`
- Social icons: hover dengan brand color token, tidak hard-coded hex
- Semua link menggunakan `@/i18n/navigation` bukan `next/link` langsung
