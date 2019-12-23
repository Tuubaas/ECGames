import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import GamePage from './views/GamePage';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/odds-em">
          <GamePage />
        </Route>
        <Route path="/odds-em/dashboard">
          <GamePage />
        </Route>
        <Route path="/odds-em/game">
          <GamePage />
        </Route>
        <Route path="/odds-em/leaderboards">
          <GamePage />
        </Route>
        <Route path="/odds-em/etc">
          {/*Change to correct tab URL*/}
          <GamePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
