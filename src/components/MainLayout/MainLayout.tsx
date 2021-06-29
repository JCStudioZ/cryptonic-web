import * as React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'react-feather';
import NavigationBar from 'components/NavigationBar';
import { MENU_LIST } from 'routes';
import Button from 'components/Button';
import { useResponsive } from 'hooks/responsive';

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isDrawerOpened, setIsDrawerOpened] = React.useState<boolean>(false);
  const { isLargeBreakPoint } = useResponsive();

  React.useEffect(() => {
    if (!isDrawerOpened) {
      return;
    }

    if (isLargeBreakPoint) {
      setIsDrawerOpened(false);
    }
  }, [isDrawerOpened, isLargeBreakPoint]);

  const handleToggleDrawer = React.useCallback(() => {
    setIsDrawerOpened(!isDrawerOpened);
  }, [isDrawerOpened]);

  const closeDrawer = () => {
    setIsDrawerOpened(false);
  };

  const renderDrawerMenu = () => {
    return (
      <ul className="menu p-4 overflow-y-auto w-[80%] sm:w-80 bg-base-100 text-base-content">
        <li>
          <div className="flex justify-between items-center">
            <Link to="/">
              <p className="text-lg font-bold">Cryptonic</p>
            </Link>
            <Button isGhost isCircle onClick={closeDrawer}>
              <X />
            </Button>
          </div>
        </li>
        {MENU_LIST.map((menuItem) => {
          const { name, url } = menuItem;
          return (
            <li key={url} onClick={closeDrawer}>
              <Link to={url}>{name}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="drawer">
      <input type="checkbox" className="drawer-toggle" checked={isDrawerOpened} readOnly />
      <div className="drawer-content h-screen">
        <div className="px-4 md:container lg:container-lg md:mx-auto text-base-content">
          <NavigationBar handleToggleDrawer={handleToggleDrawer} />
          {children}
        </div>
      </div>
      <div className="drawer-side lg:hidden">
        <label className="drawer-overlay" onClick={closeDrawer} />
        {renderDrawerMenu()}
      </div>
    </div>
  );
};

export default MainLayout;
