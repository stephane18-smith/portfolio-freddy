// src/App.js
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PortfolioHome from './pages/PortfolioHome';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={PortfolioHome} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;