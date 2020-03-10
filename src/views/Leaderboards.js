import React, { useEffect, useState, useRef } from 'react';
import { firestore } from 'firebase';
import { Card, Button } from "react-bootstrap";

const Leaderboard = ({ firebase, firestore }) => {


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

  </div >;
};

export default Leaderboard;
