import * as React from 'react';
import NavigationBar from 'components/NavigationBar';

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="md:container md:mx-auto px-4 md:px-0 min-h-screen text-base-content">
      <NavigationBar />
      {children}
    </div>
  );
};

export default MainLayout;
