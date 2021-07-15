import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'react-feather';
import NavigationBar from 'components/NavigationBar';
import { MENU_LIST } from 'routes';
import Button from 'components/Button';
import { useResponsive } from 'hooks/responsive';
import ThemeContext from 'context/theme';
import cn from 'classnames';

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const { theme } = React.useContext(ThemeContext);
  const [isDrawerOpened, setIsDrawerOpened] = React.useState<boolean>(false);
  const { isLargeBreakPoint } = useResponsive();
  const drawerClass = cn({
    drawer: true,
    'overflow-y': true,
    'h-screen': isDrawerOpened,
  });

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
          const menuLinkClass = cn({
            active: pathname === url,
          });
          return (
            <li key={url} onClick={closeDrawer}>
              <Link to={url} className={menuLinkClass}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="bg-base-300 min-h-screen" data-theme={theme}>
      <div className={drawerClass}>
        <input type="checkbox" className="drawer-toggle" checked={isDrawerOpened} readOnly />
        <div className="drawer-content overflow-y-hidden !max-h-initial md:max-h-screen">
          <div className="px-4 pb-4 xl:container md:mx-auto text-base-content">
            <NavigationBar handleToggleDrawer={handleToggleDrawer} />
            {children}
          </div>
        </div>
        <div className="drawer-side lg:hidden">
          <label className="drawer-overlay" onClick={closeDrawer} />
          {renderDrawerMenu()}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
