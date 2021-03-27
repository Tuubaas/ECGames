import React, { useState, useRef, useEffect } from 'react';

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
import { createUser, getUser, firebaseAppAuth } from './FirebaseConfig';
import { GlobalStyle } from './global';
import { theme } from './theme';
import { useOnClickOutside } from './hooks';


function App() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(undefined);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    firebaseAppAuth.onAuthStateChanged((user) => {
    if (user) {
      getUser(user.uid).then(res => {
        if (res.data()) {
          setUser(res.data())
        }
        else{
          setUser(createUser(user.uid, user.displayName, user.email, user.photoURL))
        }
      })
    }
    else{
      setUser(undefined)
    }
  })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div ref={node}>
          <Menu open={open} setOpen={setOpen} user={user}/>
          <PageHeader user={user} open={open} setOpen={setOpen} />
        </div>
        <div style={{height:'auto', width:'auto'}}>
          <Switch>
            <Route exact path="/">
              <HomeContent user={user} />
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
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
