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
  label: string;
  value: ThemeValue;
};

export const themeList: ThemeItem[] = [
  {
    label: 'light',
    value: 'light',
  },
  {
    label: 'dark',
    value: 'dark',
  },
  {
    label: 'dracula',
    value: 'dracula',
  },
  {
    label: 'cupcake',
    value: 'cupcake',
  },
  {
    label: 'bumblebee',
    value: 'bumblebee',
  },
  {
    label: 'emerald',
    value: 'emerald',
  },
  {
    label: 'corporate',
    value: 'corporate',
  },
  {
    label: 'synthwave',
    value: 'synthwave',
  },
  {
    label: 'retro',
    value: 'retro',
  },
  {
    label: 'cyberpunk',
    value: 'cyberpunk',
  },
  {
    label: 'valentine',
    value: 'valentine',
  },
  {
    label: 'halloween',
    value: 'halloween',
  },
  {
    label: 'garden',
    value: 'garden',
  },
  {
    label: 'forest',
    value: 'forest',
  },
  {
    label: 'aqua',
    value: 'aqua',
  },
  {
    label: 'lofi',
    value: 'lofi',
  },
  {
    label: 'pastel',
    value: 'pastel',
  },
  {
    label: 'fantasy',
    value: 'fantasy',
  },
  {
    label: 'wireframe',
    value: 'wireframe',
  },
  {
    label: 'black',
    value: 'black',
  },
  {
    label: 'luxury',
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
