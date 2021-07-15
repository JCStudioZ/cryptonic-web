import * as React from 'react';

export type ButtonGroupContextProps = {
  value: any;
  change: (value: any) => void;
  onChange: (value: any) => void;
};

const defaultProps: ButtonGroupContextProps = {
  value: null,
  change: () => {},
  onChange: () => {},
};

export default React.createContext(defaultProps);
