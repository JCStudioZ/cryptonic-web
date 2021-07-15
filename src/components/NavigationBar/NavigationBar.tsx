import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfileAvatarImg from 'assets/profile-avatar.png';
import { Bell, ChevronDown, Aperture } from 'react-feather';
import Button from 'components/Button';
import Dropdown, { DropdownItem } from 'components/Dropdown';
import { Menu } from 'react-feather';
import { MENU_LIST } from 'routes';
import ThemeContext, { ThemeValue } from 'context/theme';
import cn from 'classnames';

type NavigationBarProps = {
  handleToggleDrawer: () => void;
};

const NavigationBar: React.FC<NavigationBarProps> = ({ handleToggleDrawer }) => {
  const { changeTheme, theme, themeList } = React.useContext(ThemeContext);
  const { pathname } = useLocation();

  const profileDropdownItems: DropdownItem[] = React.useMemo(() => {
    return [
      {
        title: 'See your profile',
        onClick: () => {},
      },
      {
        title: 'Logout',
        onClick: () => {},
      },
    ];
  }, []);

  const onThemeChange = React.useCallback(
    (theme: ThemeValue) => {
      return () => {
        changeTheme(theme);
      };
    },
    [changeTheme],
  );

  const themeDropdownItems = React.useMemo((): DropdownItem[] | null => {
    if (!themeList) {
      return null;
    }

    return themeList?.map(({ icon, label, value }) => {
      return {
        title: (
          <div>
            <span className="mr-3">{icon}</span>
            {label}
          </div>
        ),
        onClick: onThemeChange(value),
        className: cn({
          active: theme === value,
        }),
      };
    });
  }, [onThemeChange, theme, themeList]);

  const renderNavigationItem = (text: String, location: string) => {
    return (
      <Link key={location} to={location} className="mr-2">
        <Button isGhost isRounded className="text-base" isActive={pathname === location}>
          {text}
        </Button>
      </Link>
    );
  };

  const renderProfileDropDown = () => {
    return (
      <Dropdown items={profileDropdownItems} trigger="hover">
        <Button isRounded isGhost className="px-0">
          <div className="avatar">
            <div className="rounded-full h-6 w-6 md:w-10 md:h-10 m-1">
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
    if (!themeDropdownItems) {
      return null;
    }

    return (
      <Dropdown items={themeDropdownItems} trigger="hover" className="max-h-96">
        <Button isRounded isGhost className="px-0">
          <div className="flex items-center">
            <Aperture size={22} className="mx-1" />
            <div className="hidden lg:block rounded-full m-1">Change Theme</div>
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

      <div className="flex-none">
        <Button isCircle isGhost>
          <Bell size={22} />
        </Button>
      </div>
      <div className="flex-none align-middle mx-2">{renderThemeDropDown()}</div>
      <div className="flex-none align-middle">{renderProfileDropDown()}</div>
    </div>
  );
};

export default NavigationBar;
