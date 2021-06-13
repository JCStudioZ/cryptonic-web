import * as React from 'react';
import cn from 'classnames';

export interface DropdownItem {
  title: React.ReactElement;
  onClick?: () => void;
}

type DropdownProps = {
  items: DropdownItem[];
  position?: 'end' | 'top' | 'left' | 'right';
  trigger?: 'open' | 'hover';
};

const Dropdown: React.FC<DropdownProps> = ({ items, children, position = 'end', trigger }) => {
  const dropdownClass = cn({
    dropdown: true,
    'dropdown-end': position === 'end',
    'dropdown-top': position === 'top',
    'dropdown-left': position === 'left',
    'dropdown-right': position === 'right',
    'dropdown-hover': trigger === 'hover',
    'dropdown-open': trigger === 'open',
  });

  const renderDropdownItems = () => {
    return items.map((item) => {
      return <li onClick={item.onClick}>{item.title}</li>;
    });
  };

  return (
    <div className={dropdownClass}>
      <div className="m-1 btn">{children}</div>
      <ul className="shadow menu dropdown-content bg-base-100 rounded-box w-52">{renderDropdownItems()}</ul>
    </div>
  );
};

export default Dropdown;
