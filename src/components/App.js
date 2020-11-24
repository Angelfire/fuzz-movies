import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Details from '../pages/Details';

import './app.css';
import '../styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:movieId">
            <Details />
          </Route>
          <Route exact path="">
            <Favorites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;