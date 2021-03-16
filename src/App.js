import React, { useState, useRef, useEffect } from 'react';
import * as app from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';

import { ThemeProvider } from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageHeader, HomeContent, Menu } from './components';
import {
  GamePage,
  Dashboard,
  LeaguesPage,
  HowToPlay,
  AdminPage,
  CreateLeague
} from './views';
import User from './User.firestoreTemplate'
import { createUser, getUser } from './FirebaseConfig';
import { GlobalStyle } from './global';
import { theme } from './theme';
import { useOnClickOutside } from './hooks';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };
// console.log(firebaseConfig);

// const firebaseApp = app.initializeApp(firebaseConfig);
// const firebaseAppAuth = firebaseApp.auth();
// const firestore = app.firestore();

// const signInProviders = {
//   googleProvider: new app.auth.GoogleAuthProvider(),
//   facebookProvider: new app.auth.FacebookAuthProvider()
// };




function App() {
  const [open, setOpen] = useState(false);
  const [u, setU] = useState();
  const [user, setUser] = useState(undefined);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    if(u){
      getUser(u.uid).then(res => {
        if(res.data()){
          setUser(res.data())
        }else{
          const newUser = createUser(u.uid, u.displayName, u.email, u.photoURL)
          setUser(newUser)
        }
      })
    }
  }, [u])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div ref={node}>
          <Menu open={open} setOpen={setOpen} />
          <PageHeader user={user} open={open} setOpen={setOpen} />
        </div>
        <Switch>
          <Route exact path="/">
            <HomeContent setUser={setU} user={user} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard user={user} />
          </Route>
          <Route exact path="/game">
            <GamePage user={user} />
          </Route>
          <Route exact path="/leagues">
            <LeaguesPage user={user} />
          </Route>
          <Route exact path="/about">
            <HowToPlay user={user} />
          </Route>
          <Route exact path="/admin">
            <AdminPage user={user} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
