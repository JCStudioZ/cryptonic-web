import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from 'components/MainLayout';
import Dashboard from 'pages/Dashboard';
import Exchange from 'pages/Exchange';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-base-300">
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
  );
};

export default App;
