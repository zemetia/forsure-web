export interface ClientItem {
  id: string;
  name: string;
  logo: string;
  /** true = logo has dark/black bg (no need for light pill) */
  darkBg?: boolean;
}

export const clients: ClientItem[] = [
  { id: '1',  name: 'Meclaura',                     logo: '/clients/1.png' },
  { id: '2',  name: 'WOS Carwash',                  logo: '/clients/2.png' },
  { id: '3',  name: 'Finna',                        logo: '/clients/3.png' },
  { id: '4',  name: 'Ciputra Life',                 logo: '/clients/4.png' },
  { id: '5',  name: 'Ciputra Entrepreneurs Club',   logo: '/clients/5.png' },
  { id: '6',  name: 'Aigner Blue',                  logo: '/clients/6.png',  darkBg: true },
  { id: '7',  name: 'Zentax Consulting',            logo: '/clients/7.png' },
  { id: '8',  name: 'Pie Susu Dhian',               logo: '/clients/8.png',  darkBg: true },
  { id: '9',  name: 'Teh Surabaya',                 logo: '/clients/9.png' },
  { id: '10', name: 'Cici Emas',                    logo: '/clients/10.png' },
  { id: '11', name: 'Gescolle',                     logo: '/clients/11.png' },
  { id: '12', name: 'Cucina',                       logo: '/clients/12.png' },
  { id: '13', name: 'La Cafe',                      logo: '/clients/13.png' },
  { id: '14', name: 'DEA Furniture Interior',       logo: '/clients/14.png' },
  { id: '15', name: 'Mi Hotplet',                   logo: '/clients/15.png' },
  { id: '16', name: 'Sate Sinyo',                   logo: '/clients/16.png', darkBg: true },
  { id: '17', name: "Sten's Kitchen",               logo: '/clients/17.png' },
  { id: '18', name: 'Tristar Culinary Institute',   logo: '/clients/18.png' },
  { id: '19', name: 'Coco EZ',                      logo: '/clients/19.png', darkBg: true },
  { id: '20', name: 'Ponorogo English',             logo: '/clients/20.png' },
  { id: '21', name: 'Nukoke Salad',                 logo: '/clients/21.png' },
  { id: '22', name: 'Elephant',                     logo: '/clients/22.png' },
];
