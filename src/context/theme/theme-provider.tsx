import * as React from 'react';

import ThemeContext, { themeList, ThemeValue } from '.';

export const ThemeProvider: React.FC = ({ children }) => {
  const [value, setValue] = React.useState<ThemeValue>('dracula');

  const changeTheme = React.useCallback((value: ThemeValue) => {
    setValue(value);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: value,
        themeList,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
