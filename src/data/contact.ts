/**
 * Single source of truth untuk semua konten halaman Contact.
 * Edit file ini untuk memperbarui info kontak, jam operasional, dan FAQ.
 */

export interface OfficeHours {
  days: string;
  hours: string;
  closed?: boolean;
}

export interface ContactFAQ {
  id: string;
  question: string;
  answer: string;
}

export const contactConfig = {
  // ─── Primary Channels ─────────────────────────────────────────────────────
  whatsapp: {
    /** Nomor tanpa spasi/simbol, diawali kode negara */
    number: '6289702979969',
    display: '+62 897-0297-969',
    defaultMessage: 'Halo Forsure, saya ingin konsultasi mengenai layanan Anda.',
  },
  email: 'forsure.digitalindo@gmail.com',
  instagram: {
    url: 'https://instagram.com/forsure.ids',
    handle: '@forsure.ids',
  },

  // ─── Office Hours ──────────────────────────────────────────────────────────
  officeHours: [
    { days: 'Senin – Jumat', hours: '09.00 – 17.00 WIB' },
    { days: 'Sabtu',         hours: '10.00 – 14.00 WIB' },
    { days: 'Minggu',        hours: 'Tutup', closed: true },
  ] satisfies OfficeHours[],

  // ─── FAQ ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      id: 'duration',
      question: 'Berapa lama proses pembuatan website?',
      answer:
        'Website company profile standard membutuhkan 7–14 hari kerja, landing page 5–7 hari, dan e-commerce 14–21 hari. Durasi bisa bervariasi tergantung kompleksitas dan kecepatan feedback dari klien.',
    },
    {
      id: 'free-consult',
      question: 'Apakah ada konsultasi gratis?',
      answer:
        'Ya! Kami menyediakan sesi konsultasi awal gratis via WhatsApp atau Zoom untuk memahami kebutuhan brand Anda sebelum memulai proyek — tanpa komitmen apapun.',
    },
    {
      id: 'payment',
      question: 'Bagaimana sistem pembayaran?',
      answer:
        'Kami menggunakan sistem DP (down payment) 50% di awal untuk memulai proyek, dan pelunasan 50% setelah project selesai dan disetujui klien. Pembayaran bisa melalui transfer bank atau QRIS.',
    },
    {
      id: 'revision',
      question: 'Berapa kali revisi yang disediakan?',
      answer:
        'Setiap paket sudah termasuk 2 putaran revisi. Revisi tambahan bisa didiskusikan. Kami memastikan Anda 100% puas dengan hasil akhir sebelum delivery.',
    },
    {
      id: 'area',
      question: 'Untuk area mana saja Forsure melayani?',
      answer:
        'Forsure Digitalindo melayani klien di seluruh Indonesia secara remote. Untuk layanan photoshoot, kami berbasis di Indonesia dengan opsi travel ke luar kota (travel fee berlaku).',
    },
    {
      id: 'asset',
      question: 'Apakah klien perlu menyiapkan aset sendiri?',
      answer:
        'Untuk website: kami bisa bantu sediakan foto stock premium atau klien bisa kirimkan foto sendiri. Untuk photoshoot & creative content: semua sudah termasuk dalam paket layanan kami.',
    },
  ] satisfies ContactFAQ[],
} as const;

/** Helper — generate wa.me link dengan pesan pre-fill */
export function makeWaLink(message?: string): string {
  const text = message ?? contactConfig.whatsapp.defaultMessage;
  return `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
}
