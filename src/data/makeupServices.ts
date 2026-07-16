export interface MakeupCategory {
  icon: 'makeup' | 'wedding' | 'family' | 'event';
  title: string;
  items: string[];
}

export const MAKEUP_CATEGORIES: MakeupCategory[] = [
  {
    icon: 'makeup',
    title: 'Make Up',
    items: [
      'Make Up untuk Wisuda / Photo Shoot / Party / Sweet 17',
      'Make Up untuk Tunangan / Groom / Pre-Wedding / Bridesmaid',
      'Make Up + Hairdo untuk Wisuda / Photo Shoot / Party / Sweet 17',
      'Make Up untuk Tunangan / Groom / Pre-Wedding / Bridesmaid + Hairdo',
    ],
  },
  {
    icon: 'wedding',
    title: 'Wedding Package',
    items: ['Wedding Make Up + Free Hairdo', 'Free Trial Make Up', 'Soft Lens', 'Retouch'],
  },
  {
    icon: 'family',
    title: 'Wedding Family Package',
    items: [
      'Wedding Make Up untuk Keluarga (3 Orang)',
      'Free Trial Make Up',
      'Soft Lens',
      'Retouch',
    ],
  },
  {
    icon: 'event',
    title: 'Special Event',
    items: ['Engagement', 'Sweet 17', 'Photoshoot', 'Graduation', 'Bride', 'Groom'],
  },
];

export const MAKEUP_TERMS: string[] = [
  'Gratis transport untuk area Surabaya',
  'DP 50% untuk mengamankan tanggal booking',
  'Pelunasan wajib dilakukan H-1 via transfer bank',
  'DP tidak dapat dikembalikan jika klien membatalkan booking',
  'Reschedule tergantung ketersediaan, dan DP tidak dapat dikembalikan jika tanggal baru tidak tersedia',
];
