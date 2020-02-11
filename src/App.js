import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageHeader, HomeContent } from './components/index';
import GamePage from './views/GamePage';
import Dashboard from './views/Dashboard';
import Leaderboard from './views/Leaderboards';
import HowToPlay from './views/HowToPlay';
import User from './User.firestoreTemplate';

import * as app from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebaseConfig from './FirebaseConfig';

const firebaseApp = app.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new app.auth.GoogleAuthProvider(),
  facebookProvider: new app.auth.FacebookAuthProvider()
};

function App(props) {
  return (
    <React.Fragment>
      <PageHeader firebase={props} />
      <Router>
        <Switch>
          <Route exact path="/">
            {/*<HomePage />*/}
            <HomeContent />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard firebase={props} />
          </Route>
          <Route exact path="/game">
            <GamePage firebase={props} />
          </Route>
          <Route exact path="/leaderboards">
            <Leaderboard firebase={props} />
          </Route>
          <Route exact path="/about">
            <HowToPlay firebase={props} />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
