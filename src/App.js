import React, { useContext, useEffect } from 'react';

import AuthContextManager, { AuthContext } from './FirebaseContextManager';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import HomePage from './views/HomePage';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider()
};

function App(props) {
  const [auth, setAuth] = useContext(AuthContext);
  useEffect(() => setAuth(props));

  const { user, signOut, signInWithGoogle, signInWithFacebook } = props;

  return (
    <AuthContextManager>
      <HomePage auth={props} />
      {user ? <p>Hello, {user.displayName}</p> : <p>PLease sign in</p>}
      {user ? (
        <button onClick={signOut}>Sing out</button>
      ) : (
        <React.Fragment>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <button onClick={signInWithFacebook}>Sing in with Facebook</button>
        </React.Fragment>
      )}
    </AuthContextManager>
  );
}

export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
