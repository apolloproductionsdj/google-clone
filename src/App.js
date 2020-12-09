import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from
  "react-router-dom";
import SearchPage from './SearchPage';
import About from './About';
import Store from './Components/Store';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
