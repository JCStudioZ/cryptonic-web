import Button, { ButtonProps } from 'components/Button';
import * as React from 'react';

type ButtonGroupItemProps = {
  isActive?: boolean;
} & ButtonProps;

export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({ isActive, children, ...rest }) => {
  return (
    <Button variant={isActive ? 'primary' : undefined} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonGroupItem;
