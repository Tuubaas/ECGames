import React, { useEffect, useState, useRef } from 'react';
import { firestore } from 'firebase';
import { Card, Button } from "react-bootstrap";
import { Formik, Form, FieldArray } from 'formik';

const Leaderboard = ({ firebase, firestore }) => {

  const [showForm, setShowForm] = useState(false)
  //const [leagueName, setLeagueName] = useState('')

  const LEAGUES = 'Leagues'
  let refreshed = true
  const [leagues, setLeagues] = useState([])
  let doc = firestore.collection('Leagues').doc('Premier League')
  useEffect(() => {
    if (refreshed) {
      let getDoc = doc
        .get()
        .then(doc => {
        }
        )
      refreshed = false
    }
  });


  // const handleChange = (e) => {
  //   setLeagueName(e.target.value)
  // }

  const addToDb = (values) => {
    console.log('You added ', values.leagueName)
    let user = firebase.user.displayName
    // TODO: User should be their ID

    let data = {
      Owner: user,
      users: [user]
    }
    let setDoc = firestore.collection('Leagues').doc(values.leagueName).set(data)


  }



  const addLeague = () => {
    return (
      <div>
        <h1>Anywhere in your app!</h1>
        <Formik initialValues={{ leagueName: ' ' }} onSubmit={(values) => { addToDb(values) }}>
          {({ values, touched, handleChange, handleBlur }) => (
            <Form noValidate autoComplete="off">
              <label>Name of the league: </label>
              <input
                name='leagueName'
                type='text'
                onChange={handleChange}
                value={values.leagueName}
              />
              <button type='submit'>Submit league</button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }

  const getLeagues = () => {
    let leagueList = []
    firestore.collection('Leagues').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          leagueList.push({ name: doc.id, data: doc.data() })

        })
        setLeagues(leagueList)
      }
      )

  }

  // TODO: Make a confirmation modal that says "Are you sure, before deleting"
  const deleteLeague = (object) => {
    let user = firebase.user.displayName
    console.log(user, ' and ', object.data.Owner)
    if (object.data.Owner === user) {
      console.log('Deleted')
      firestore.collection(LEAGUES).doc(object.name).delete()
    }
  }

  const leagueItems = () => {
    getLeagues()
    const listOfStuff = leagues.map((object, index) =>
      <React.Fragment>
        <li>{object.name} with Owner: {object.data.Owner} and participants: {object.data.users}</li>
        <Button onClick={() => deleteLeague(object)}>Delete</Button>
      </React.Fragment>
    );
    return (
      <ul>{listOfStuff}</ul>
    )
  }


  return <div>

    {leagueItems()}
    <Button variant='primary' onClick={() => setShowForm(!showForm)}>{showForm ? 'Close form' : 'Add league'}</Button>
    {showForm ? addLeague() : null}
  </div >;
};

export default Leaderboard;
