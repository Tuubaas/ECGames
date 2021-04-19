import * as app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import { setUser } from "./redux/actions";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const firebaseApp = app.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();
const firestore = app.firestore();

const COLLECTIONS = {
  USERS: 'users',
  LEAGUES: 'leagues',
  BETS: 'bets'
}

/*
 * Sign-in functions
 */

var googleProvider = new app.auth.GoogleAuthProvider();
var facebookProvider = new app.auth.FacebookAuthProvider();



export const googleSignIn = () => {
  firebaseAppAuth.signInWithPopup(googleProvider).then((res) => {
    var credential = res.credential;
    var token = credential.accessToken;
    var user = res.user;
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage);
  })
}

export const facebookSignIn = () => {
  firebaseAppAuth.signInWithPopup(facebookProvider).then((res) => {
    var credential = res.credential;
    var token = credential.acceddToken;
    var user = res.user;
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  })
}



/*
 * Firestore getters
 */

export const getUsers = () => {
  return firestore.collection(COLLECTIONS.USERS).get();
}

export const getUser = (userId) => {
  return firestore.collection(COLLECTIONS.USERS).doc(userId).get();
}

export const getBets = (date) => {
  return firestore.collection(COLLECTIONS.BETS).doc(date).get();
}

export const getUserbets = (userId, leagueId, date) => {
  return firestore.collection(COLLECTIONS.LEAGUES).doc(leagueId).collection(COLLECTIONS.USERS).doc(userId).collection(COLLECTIONS.BETS).doc(date).get();
}

// export const getWeekUserbets = () => {
//   return firestore.collection(COLLECTIONS.USERS).get();
// }

export const getLeague = (leagueId) => {
  return firestore.collection(COLLECTIONS.LEAGUES).doc(leagueId).get();
}


/*
 * Firestore setters
 */

export const createUser = (id, name, email, photoURL) => {

  return firestore.collection(COLLECTIONS.USERS).doc(id).set({
    id: id,
    name: name,
    email: email,
    photoURL: photoURL,
    leagues: []
  })
}

export const setBets = (date, bets) => {
  return firestore.collection(COLLECTIONS.BETS).doc(date).set({...bets})
}

export const setUbets = (userId, leagueId, date, bets) => {
  console.log(userId, leagueId, date, bets);
  return firestore.collection(COLLECTIONS.LEAGUES).doc(leagueId).collection(COLLECTIONS.USERS).doc(userId).collection(COLLECTIONS.BETS).doc(date).set({
    ...bets
  })
}

export const createLeague = (userId, leagueName) => {
  const leagueId = createRandomId() + createRandomId()
  firestore.collection(COLLECTIONS.USERS).doc(userId).update({
    leagues: app.firestore.FieldValue.arrayUnion(leagueId)
  })

  firestore.collection(COLLECTIONS.LEAGUES).doc(leagueId).collection(COLLECTIONS.USERS).doc(userId).set({
    userId: userId,
    balance: 10000,
  })

  firestore.collection(COLLECTIONS.LEAGUES).doc(leagueId).set({
    id: leagueId,
    name: leagueName,
    owner: userId,
  })
}

const createRandomId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

export const joinLeague = (userId, leagueId) => {
  firestore.collection(COLLECTIONS.LEAGUES).doc(leagueId).collection(COLLECTIONS.USERS).doc(userId).set({userId: userId, balance: 10000})
  firestore.collection(COLLECTIONS.USERS).doc(userId).update({
    leagues: app.firestore.FieldValue.arrayUnion(leagueId)
  })

}