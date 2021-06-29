import * as React from 'react';
import cn from 'classnames';
import ButtonGroupContext from './context';

export type ButtonGroupProps = {
  value: any;
  isFullWidth?: boolean;
  className?: string;
  onChange?: (value) => void;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ value, onChange, isFullWidth, className, children }) => {
  const { change } = React.useContext(ButtonGroupContext);

  React.useEffect(() => {
    change(value);
    onChange && onChange(value);
  }, [change, onChange, value]);

  const buttonGroupClass = cn({
    'btn-group': true,
    'w-full': isFullWidth,
  });
  return <div className={cn(buttonGroupClass, className)}>{children}</div>;
};

export default ButtonGroup;
