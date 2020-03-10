import React, { useState, useRef } from 'react';
import * as app from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageHeader, HomeContent, Menu } from './components';
import {
  GamePage,
  Dashboard,
  Leaderboards,
  HowToPlay,
  AdminPage
} from './views';
import User from './User.firestoreTemplate';
import firebaseConfig from './FirebaseConfig';
import { GlobalStyle } from './global';
import { theme } from './theme';
import { useOnClickOutside } from './hooks';

const firebaseApp = app.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const firestore = app.firestore();

const providers = {
  googleProvider: new app.auth.GoogleAuthProvider(),
  facebookProvider: new app.auth.FacebookAuthProvider()
};

function App(props) {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div ref={node}>
          <Menu open={open} setOpen={setOpen} />
          <PageHeader firebase={props} open={open} setOpen={setOpen} />
        </div>
        <Switch>
          <Route exact path="/">
            <HomeContent firebase={props} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard firebase={props} />
          </Route>
          <Route exact path="/game">
            <GamePage firebase={props} firestore={firestore} />
          </Route>
          <Route exact path="/leaderboards">
            <Leaderboards firebase={props} />
          </Route>
          <Route exact path="/about">
            <HowToPlay firebase={props} />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
