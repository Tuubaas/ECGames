import React, { useEffect, useState, useRef } from 'react';
import { firestore } from 'firebase';
import { Card, Button } from "react-bootstrap";
import { Formik, Form, FieldArray } from 'formik';

const Leaderboard = ({ firebase, firestore }) => {

  const [showForm, setShowForm] = useState(false)


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

  const addToDb = () => {
    console.log('added to database =)')
  }
  const addLeague = () => {
    return (
      <div>
        <h1>Anywhere in your app!</h1>
        <Formik initialValues={{ league: '' }} onSubmit={() => { addToDb() }}>
          {({ values, touched, handleChange, handleBlur }) => (
            <Form noValidate autoComplete="off">
              <FieldArray name="bets">
                {({ push, remove }) => (
                  <div>

                  </div>
                )}
              </FieldArray>
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
  const leagueItems = () => {
    getLeagues()
    const listOfStuff = leagues.map((object, index) =>
      <li>{object.name} with Owner: {object.data.Owner} and participants: {object.data.Users}</li>

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
