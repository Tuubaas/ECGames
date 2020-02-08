import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageHeader, HomeContent } from './components/index';
//import HomePage from './views/HomePage';
import Dashboard from './views/Dashboard';

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
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/game">
            <Dashboard />
          </Route>
          <Route path="/leaderboards">
            <Dashboard />
          </Route>
          <Route path="/etc">
            {/*Change to correct tab URL*/}
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
