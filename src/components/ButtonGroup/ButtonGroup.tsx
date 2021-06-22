import * as React from 'react';
import cn from 'classnames';

type ButtonGroupProps = {
  isFullWidth?: boolean;
  className?: string;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ isFullWidth, className, children }) => {
  const buttonGroupClass = cn({
    'btn-group': true,
    'w-full': isFullWidth,
  });
  return <div className={cn(buttonGroupClass, className)}>{children}</div>;
};

export default ButtonGroup;
