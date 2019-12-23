import app from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const providers = {
  googleProvider: new app.auth.GoogleAuthProvider(),
  facebookProvider: new app.auth.FacebookAuthProvider()
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doSignInWithGoogle = () => {
    this.props.signInWithGoogle();
  };

  doSignInWithFacebook = () => {
    this.props.signInWithFacebook();
  };

  doSignOut = () => {
    this.props.signOut();
  };
}

export default withFirebaseAuth({ providers, withFirebaseAuth })(Firebase);
