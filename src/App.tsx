import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainLayout from 'components/MainLayout';
import Dashboard from 'pages/Dashboard';
import Exchange from 'pages/Exchange';
import './App.scss';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="bg-base-300" data-theme="halloween">
          <MainLayout>
            <Switch>
              <Route path="/Exchange">
                <Exchange />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </MainLayout>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
