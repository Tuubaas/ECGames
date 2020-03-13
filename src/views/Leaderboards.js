import React, { useEffect, useState, useRef } from 'react';
import { firestore } from 'firebase';
import { Button } from '../components'
import { Formik, Form, FieldArray } from 'formik';

const LEAGUES = 'Leagues'
const Leaderboard = ({ firebase, firestore }) => {

  const [showForm, setShowForm] = useState(false)


  const [refreshed, setRefreshed] = useState(true)
  const [leagues, setLeagues] = useState([])
  useEffect(() => {
    if (refreshed) {
      getLeagues()
      setRefreshed(false)
    }
  });


  const addToDb = (values) => {
    let user = firebase.user.displayName
    // TODO: User should be their ID
    let data = {
      Owner: user,
      users: [user]
    }
    firestore.collection(LEAGUES).doc(values.leagueName).set(data)
    setRefreshed(true)
  }

  const addLeague = () => {
    return (
      <div>
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
    firestore.collection(LEAGUES).get()
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
    if (object.data.Owner === user) {
      firestore.collection(LEAGUES).doc(object.name).delete()
      setRefreshed(true)
    }
  }




  return (
    <div>
      <ul>{
        leagues.map((object, index) =>
          <React.Fragment key={index}>
            <li> {object.name} with Owner: {object.data.Owner} and participants: {object.data.users}</li>
            {object.data.Owner === firebase.user.displayName &&
              <Button onClick={() => deleteLeague(object)}>Delete</Button>}
          </React.Fragment>


        )}
      </ul>
      <Button variant='primary' onClick={() => setShowForm(!showForm)}>{showForm ? 'Close form' : 'Add league'}</Button>
      {showForm ? addLeague() : null}
    </div >);
};

export default Leaderboard;
