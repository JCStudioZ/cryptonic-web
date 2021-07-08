import * as React from 'react';

import ThemeContext, { ThemeValue } from '.';

export const ThemeProvider: React.FC = ({ children }) => {
  const [value, setValue] = React.useState<ThemeValue>('dracula');

  const changeTheme = React.useCallback((value: ThemeValue) => {
    setValue(value);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        value: value,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
