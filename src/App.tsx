import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MainLayout from 'components/MainLayout';
import Dashboard from 'pages/Dashboard';
import Exchange from 'pages/Exchange';
import Wallet from 'pages/Wallet';
import './App.scss';
import { ThemeProvider } from 'context/theme';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <MainLayout>
            <Switch>
              <Route path="/Exchange">
                <Exchange />
              </Route>
              <Route path="/Wallet">
                <Wallet />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </MainLayout>
        </Router>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
