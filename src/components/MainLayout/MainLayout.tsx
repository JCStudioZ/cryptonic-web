import * as React from 'react';
import NavigationBar from 'components/NavigationBar';

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="px-4 md:container md:mx-auto md:px-0 min-h-screen text-base-content">
      <NavigationBar />
      {children}
    </div>
  );
};

export default MainLayout;
