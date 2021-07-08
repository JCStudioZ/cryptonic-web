import * as React from 'react';

export type ThemeValue = 'light' | 'dracula';

export type ThemeContextProps = {
  value?: ThemeValue;
  changeTheme: (value: ThemeValue) => void;
};

const defaultProps: ThemeContextProps = {
  changeTheme: () => {},
};

export default React.createContext(defaultProps);
export * from './theme-provider';
