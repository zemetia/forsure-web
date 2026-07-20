export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  darkBg?: boolean;
}

export const partners: PartnerItem[] = [
  { id: '1', name: 'Ciputra Life',                logo: '/partners/1.png' },
  { id: '2', name: 'Ciputra Entrepreneurs Club',  logo: '/partners/2.png' },
  { id: '3', name: 'Indscript Creative',          logo: '/partners/3.png' },
  { id: '4', name: 'Helden Coffee',               logo: '/partners/4.png' },
{ id: '6', name: "Depot LH",                    logo: '/partners/6.png' },
  { id: '7', name: 'KJT Care',                    logo: '/partners/7.png', darkBg: true },
  { id: '8', name: '1,000+ Clients',              logo: '/partners/8.png' },
  { id: '9', name: 'Cosuren Group',               logo: '/partners/9.png' },
];
