import * as React from 'react';

export type ThemeValue =
  | 'light'
  | 'dark'
  | 'cupcake'
  | 'bumblebee'
  | 'emerald'
  | 'corporate'
  | 'synthwave'
  | 'retro'
  | 'cyberpunk'
  | 'valentine'
  | 'halloween'
  | 'garden'
  | 'forest'
  | 'aqua'
  | 'lofi'
  | 'pastel'
  | 'fantasy'
  | 'wireframe'
  | 'black'
  | 'luxury'
  | 'dracula';

type ThemeItem = {
  icon: string;
  label: string;
  value: ThemeValue;
};

export const themeList: ThemeItem[] = [
  {
    icon: '🌝',
    label: 'Light',
    value: 'light',
  },
  {
    icon: '🌚',
    label: 'Dark',
    value: 'dark',
  },
  {
    icon: '🧛‍♂️',
    label: 'Dracula',
    value: 'dracula',
  },
  {
    icon: '🧁',
    label: 'Cupcake',
    value: 'cupcake',
  },
  {
    icon: '🐝',
    label: 'Bumblebee',
    value: 'bumblebee',
  },
  {
    icon: '✳️',
    label: 'Emerald',
    value: 'emerald',
  },
  {
    icon: '🏢',
    label: 'Corporate',
    value: 'corporate',
  },
  {
    icon: '🌃',
    label: 'Synthwave',
    value: 'synthwave',
  },
  {
    icon: '👴',
    label: 'Retro',
    value: 'retro',
  },
  {
    icon: '🤖',
    label: 'Cyberpunk',
    value: 'cyberpunk',
  },
  {
    icon: '🌸',
    label: 'Valentine',
    value: 'valentine',
  },
  {
    icon: '🎃',
    label: 'Halloween',
    value: 'halloween',
  },
  {
    icon: '🌷',
    label: 'Harden',
    value: 'garden',
  },
  {
    icon: '🌲',
    label: 'Forest',
    value: 'forest',
  },
  {
    icon: '🐟',
    label: 'Aqua',
    value: 'aqua',
  },
  {
    icon: '👓',
    label: 'Lofi',
    value: 'lofi',
  },
  {
    icon: '🖍',
    label: 'Pastel',
    value: 'pastel',
  },
  {
    icon: '🧚‍♀️',
    label: 'Fantasy',
    value: 'fantasy',
  },
  {
    icon: '📝',
    label: 'Wireframe',
    value: 'wireframe',
  },
  {
    icon: '🏴',
    label: 'Black',
    value: 'black',
  },
  {
    icon: '💎',
    label: 'Lxury',
    value: 'luxury',
  },
];

export type ThemeContextProps = {
  theme?: ThemeValue;
  themeList?: ThemeItem[];
  changeTheme: (value: ThemeValue) => void;
};

const defaultProps: ThemeContextProps = {
  changeTheme: () => {},
};

export default React.createContext(defaultProps);
export * from './theme-provider';
