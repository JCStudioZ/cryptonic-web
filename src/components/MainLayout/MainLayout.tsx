import * as React from 'react';
import NavigationBar from 'components/NavigationBar';

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 min-h-screen">
      <NavigationBar />
      {children}
    </div>
  );
};

export default MainLayout;
