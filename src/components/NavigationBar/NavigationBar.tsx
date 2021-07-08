import * as React from 'react';
import { Link } from 'react-router-dom';
import ProfileAvatarImg from 'assets/profile-avatar.png';
import { Search, Bell, ChevronDown } from 'react-feather';
import Button from 'components/Button';
import Dropdown, { DropdownItem } from 'components/Dropdown';
import FormInput from 'components/FormInput';
import { Menu } from 'react-feather';
import { MENU_LIST } from 'routes';
import ThemeContext from 'context/theme';
import cn from 'classnames';

type NavigationBarProps = {
  handleToggleDrawer: () => void;
};

const NavigationBar: React.FC<NavigationBarProps> = ({ handleToggleDrawer }) => {
  const { changeTheme, value: theme } = React.useContext(ThemeContext);

  const profileDropdownItems: DropdownItem[] = React.useMemo(() => {
    return [
      {
        title: <a>See your profile</a>,
        onClick: () => {},
      },
      {
        title: <a>Logout</a>,
        onClick: () => {},
      },
    ];
  }, []);

  const themeDropdownItems = React.useMemo((): DropdownItem[] => {
    return [
      {
        title: <a>🌝 light</a>,
        onClick: () => {
          changeTheme('light');
        },
        className: cn({
          active: theme === 'light',
        }),
      },
      {
        title: <a>🌚 dark</a>,
        onClick: () => {
          changeTheme('dracula');
        },
        className: cn({
          active: theme === 'dracula',
        }),
      },
    ];
  }, [changeTheme, theme]);

  const renderNavigationItem = (text: String, location: string) => {
    return (
      <Link key={location} to={location}>
        <Button isGhost isRounded className="text-base">
          {text}
        </Button>
      </Link>
    );
  };

  const renderProfileDropDown = () => {
    return (
      <Dropdown items={profileDropdownItems} trigger="hover">
        <Button isRounded isGhost className="px-0">
          <div className="hidden md:flex items-center px-2">John Doe</div>
          <div className="avatar">
            <div className="rounded-full w-10 h-10 m-1">
              <img className="w-10 h-10" src={ProfileAvatarImg} />
            </div>
          </div>
          <div className="flex items-center pl-2">
            <ChevronDown size="22" />
          </div>
        </Button>
      </Dropdown>
    );
  };

  const renderThemeDropDown = () => {
    return (
      <Dropdown items={themeDropdownItems} trigger="hover">
        <Button isRounded isGhost className="px-0">
          <div className="avatar">
            <div className="rounded-full m-1">Theme</div>
          </div>
          <div className="flex items-center pl-2">
            <ChevronDown size="22" />
          </div>
        </Button>
      </Dropdown>
    );
  };

  return (
    <div className="navbar mb-6 px-0 md:px-2 md:mb-11">
      <div className="flex-none mr-3 lg:hidden">
        <Button isLink isSquare isGhost size="extra-small" onClick={handleToggleDrawer}>
          <Menu size={24} />
        </Button>
      </div>
      <div className="flex-none xl:mr-10 md:mr-0">
        <span className="text-lg font-bold">Cryptonic</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          {MENU_LIST.map((menuItem) => {
            return renderNavigationItem(menuItem.name, menuItem.url);
          })}
        </div>
      </div>
      <div className="hidden md:flex md:flex-1 lg:flex-none mx-2">
        <FormInput type="text" placeholder="Search" />
      </div>
      <div className="flex-none">
        <Button isCircle isGhost>
          <Search size={22} />
        </Button>
      </div>
      <div className="flex-none">
        <Button isCircle isGhost>
          <Bell size={22} />
        </Button>
      </div>
      <div className="flex-none align-middle">{renderProfileDropDown()}</div>
      <div className="flex-none align-middle">{renderThemeDropDown()}</div>
    </div>
  );
};

export default NavigationBar;
