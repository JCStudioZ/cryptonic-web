import * as React from 'react';

export type ButtonGroupContextProps = {
  value: any;
  change: (value: any) => void;
};

const defaultProps: ButtonGroupContextProps = {
  value: null,
  change: () => {},
};

export default React.createContext(defaultProps);
