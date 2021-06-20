export type MenuItem = {
  name: string;
  url: string;
};

export const MENU_LIST: MenuItem[] = [
  {
    name: 'Dashboard',
    url: '/',
  },
  {
    name: 'Exchange',
    url: '/exchange',
  },
  {
    name: 'Wallet',
    url: '/wallet',
  },
  {
    name: 'Market',
    url: '/market',
  },
];
