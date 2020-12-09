import React from 'react';
import './App.css';
import Home from './Home';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from
  "react-router-dom";
import SearchPage from './SearchPage';
import About from './About';
=======
import { BrowserRouter as Router, Switch, Route } from 
"react-router-dom";
import SearchPage from './SearchPage';
>>>>>>> e6e2244347bcc7ebd019c93e77ccd75ac1209c36

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route path="/about">
            <About />
          </Route>
          <Route path="/search">
            <SearchPage />
=======
          <Route path="/search">
          <SearchPage />
>>>>>>> e6e2244347bcc7ebd019c93e77ccd75ac1209c36
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
