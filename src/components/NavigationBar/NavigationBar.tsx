import * as React from 'react';
import { Link } from 'react-router-dom';
import ProfileAvatarImg from 'assets/profile-avatar.png';
import { Search, Bell, ChevronDown } from 'react-feather';
import Button from 'components/Button';
import Dropdown, { DropdownItem } from 'components/Dropdown';
import FormInput from 'components/FormInput';

type NavigationBarProps = {};

const NavigationBar: React.FC<NavigationBarProps> = () => {
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

  const renderNavigationItem = (text: String, location: string) => {
    return (
      <Link to={location}>
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
              <img width="40" height="40" src={ProfileAvatarImg} />
            </div>
          </div>
          <div className="flex items-center pl-2">
            <ChevronDown size="22" />
          </div>
        </Button>
      </Dropdown>
    );
  };

  return (
    <div className="navbar mb-6 md:mb-11">
      <div className="flex-none xl:mr-10 md:mr-0">
        <span className="text-lg font-bold">Cryptonic</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          {renderNavigationItem('Dashboard', '/')}
          {renderNavigationItem('Exchange', '/exchange')}
          {renderNavigationItem('Wallet', '/wallet')}
          {renderNavigationItem('Market', '/market')}
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
    </div>
  );
};

export default NavigationBar;
