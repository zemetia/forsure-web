export type ServiceCategory = 'website' | 'creative' | 'photoshoot';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  subtitle: string;
  features: string[];
  featured?: boolean;
}

export interface PricingTierItem {
  name: 'Bronze' | 'Silver' | 'Gold';
  tagline: string;
  features: string[];
  featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  // ─── Solusi Website ───────────────────────────────────────────────────────────
  {
    id: 'website-company-profile',
    category: 'website',
    title: 'Website Company Profile',
    subtitle: 'Website 5 Halaman Profesional',
    features: [
      'Domain & hosting termasuk (1 tahun)',
      '5 halaman lengkap: Beranda, Tentang, Layanan, Kontak, dan lainnya',
      'Desain mobile responsive',
      'Setup SEO Dasar',
      'Desain bersih dan modern sesuai brand Anda',
    ],
  },
  {
    id: 'landing-page',
    category: 'website',
    title: 'Landing Page',
    subtitle: 'Halaman Tunggal Konversi Tinggi',
    features: [
      'Satu halaman konversi tinggi',
      'Penempatan CTA dan tata letak yang optimal',
      'Ideal untuk promosi, event, atau peluncuran produk',
      'Desain mobile responsive',
      'Waktu muat cepat — dioptimasi performa',
    ],
  },
  {
    id: 'ecommerce',
    category: 'website',
    title: 'Website E-Commerce',
    subtitle: 'Solusi Toko Online Lengkap',
    features: [
      'Setup toko online lengkap',
      'Keranjang belanja & alur checkout',
      'Dashboard admin untuk manajemen produk',
      'Mobile responsive & siap SEO',
      'Integrasi payment gateway aman',
    ],
    featured: true,
  },
  {
    id: 'custom-qris',
    category: 'website',
    title: 'Custom Website + QRIS',
    subtitle: 'Fitur Kustom & Payment Gateway',
    features: [
      'Fitur aplikasi web kustom',
      'Integrasi payment gateway QRIS',
      'Panel admin & manajemen pengguna',
      'Arsitektur yang skalabel',
      'Kepemilikan source code penuh',
    ],
  },

  // ─── Konten Kreatif ───────────────────────────────────────────────────────────
  {
    id: 'foto-produk',
    category: 'creative',
    title: 'Foto Produk',
    subtitle: '10 Foto Produk Hasil Edit',
    features: [
      '10 foto produk yang sudah diedit sempurna',
      'Sesi foto 1–2 jam',
      'File mentah disertakan',
      'Hingga 2 putaran revisi',
      'Studio profesional atau setup lokasi',
    ],
  },
  {
    id: 'instagram-ads',
    category: 'creative',
    title: 'Manajemen Iklan Instagram',
    subtitle: 'Manajemen Kampanye Iklan Penuh',
    features: [
      'Desain kreatif untuk iklan',
      'Penulisan teks & caption',
      'Setup iklan & konfigurasi targeting',
      'Analitik performa & pelaporan',
      'Review performa bulanan',
    ],
  },
  {
    id: 'video-reels-tiktok',
    category: 'creative',
    title: 'Reels / TikTok Video',
    subtitle: 'Video Pendek 1 Menit',
    features: [
      'Video vertikal 1 menit (9:16)',
      'Pengembangan konsep penuh',
      'Editing profesional',
      'Musik latar berlisensi',
      'Dioptimalkan untuk Reels & TikTok',
    ],
  },
  {
    id: 'youtube-video',
    category: 'creative',
    title: 'YouTube Video',
    subtitle: 'Konten YouTube 1 Menit',
    features: [
      'Video landscape 1 menit (16:9)',
      'Pengembangan konsep penuh',
      'Editing profesional',
      'Musik latar berlisensi',
      'Thumbnail dioptimalkan untuk YouTube',
    ],
  },
  {
    id: 'talent-single-visit',
    category: 'creative',
    title: 'Talent dalam Satu Kunjungan',
    subtitle: 'Talent Profesional, Foto & Video',
    features: [
      'Talent profesional disediakan',
      'Sesi satu kunjungan',
      'Mencakup deliverable foto & video',
      'Editing penuh termasuk',
      'Konsep dan lokasi fleksibel',
    ],
  },
  {
    id: 'sosmed-management',
    category: 'creative',
    title: 'Manajemen Media Sosial',
    subtitle: '15 Postingan/Bulan — Manajemen Penuh',
    features: [
      '15 postingan per bulan (9 video + 6 desain)',
      'Perencanaan & penjadwalan konten',
      'Penulisan caption & hashtag',
      'Analitik performa bulanan',
      'Paket manajemen penuh 1 bulan',
    ],
    featured: true,
  },

  // ─── Foto & Video Profesional ─────────────────────────────────────────────────
  {
    id: 'single-photoshoot',
    category: 'photoshoot',
    title: 'Sesi Foto Tunggal',
    subtitle: 'Sesi Outdoor atau Indoor',
    features: [
      'Semua foto diedit sempurna',
      'Durasi sesi fleksibel',
      'Lokasi outdoor atau indoor',
      'File mentah disertakan',
      'Peralatan profesional',
    ],
  },
  {
    id: 'single-video',
    category: 'photoshoot',
    title: 'Video Tunggal',
    subtitle: 'Sesi Outdoor atau Indoor',
    features: [
      'Semua footage diedit sempurna',
      'Lokasi outdoor atau indoor',
      'Durasi sesi fleksibel',
      'Peralatan & kru profesional',
      'Video final resolusi HD',
    ],
  },
  {
    id: 'graduation-photoshoot',
    category: 'photoshoot',
    title: 'Foto Wisuda',
    subtitle: 'Individu, Pasangan, atau Keluarga',
    features: [
      'Sesi individu, pasangan, atau keluarga',
      'Pilihan lokasi indoor & outdoor',
      'Semua foto diedit sempurna',
      'Ganti outfit beberapa kali diperbolehkan',
      'Pengiriman digital semua foto final',
    ],
  },
];

export const PREWED_TIERS: PricingTierItem[] = [
  {
    name: 'Bronze',
    tagline: 'Ideal untuk sesi yang lebih singkat',
    features: [
      'Sesi foto maks 4 jam',
      '20 foto — semua diedit sempurna',
      '1 video diedit (3–5 menit)',
      'Semua foto asli (mentah) disertakan',
      'Konsultasi gratis konsep & lokasi',
    ],
  },
  {
    name: 'Silver',
    tagline: 'Ideal untuk sesi yang lebih panjang & detail',
    featured: true,
    features: [
      'Sesi foto maks 8 jam',
      '30 foto — semua diedit sempurna',
      '1 video diedit (3–5 menit)',
      'Semua foto asli (mentah) disertakan',
      'Gratis 1 video untuk Instagram Stories',
      'Konsultasi gratis konsep & lokasi',
    ],
  },
  {
    name: 'Gold',
    tagline: 'Pengalaman premium seharian penuh',
    features: [
      'Sesi foto seharian penuh',
      '50 foto — semua diedit sempurna',
      '2 video diedit (3–5 menit masing-masing)',
      'Semua foto asli (mentah) disertakan',
      'Gratis 1 video untuk Instagram Stories',
      'Konsultasi gratis konsep & lokasi',
    ],
  },
];
