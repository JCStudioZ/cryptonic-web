import InternalButtonGroup from './ButtonGroup';
import ButtonGroupItem from './ButtonGroupItem';

export type ButtonGroupCompound = typeof InternalButtonGroup & {
  Item: typeof ButtonGroupItem;
};

const ButtonGroup = InternalButtonGroup as ButtonGroupCompound;
ButtonGroup.Item = ButtonGroupItem;

export { ButtonGroupItem };
export default ButtonGroup;
