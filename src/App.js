import React, { useContext, useEffect } from "react";
import logo from "./logo.svg";

import UserContextManager, {
  UserContext,
  FirebaseContext
} from "./FirebaseContextManager";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider()
};

function App(props) {
  const [firebase, setFirebase] = useContext(FirebaseContext);
  useEffect(() => setFirebase(firebaseApp));

  const { user, signOut, signInWithGoogle, signInWithFacebook } = props;

  return (
    <UserContextManager>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {user ? <p>Hello, {user.displayName}</p> : <p>PLease sign in</p>}
          {user ? (
            <button onClick={signOut}>Sing out</button>
          ) : (
            <React.Fragment>
              <button onClick={signInWithGoogle}>Sign in with Google</button>
              <button onClick={signInWithFacebook}>
                Sing in with Facebook
              </button>
            </React.Fragment>
          )}
        </header>
      </div>
    </UserContextManager>
  );
}

export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
