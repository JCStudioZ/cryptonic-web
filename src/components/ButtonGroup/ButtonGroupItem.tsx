import * as React from 'react';
import Button, { ButtonProps } from 'components/Button';
import ButtonGroupContext from './context';

type ButtonGroupItemProps = {
  selectedValue: any;
} & ButtonProps;

export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({ selectedValue, children, ...rest }) => {
  const { value } = React.useContext(ButtonGroupContext);
  const isActive = value === selectedValue;
  return (
    <Button variant={isActive ? 'primary' : undefined} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonGroupItem;
