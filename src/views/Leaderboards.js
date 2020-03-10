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
          console.log(doc.id, '=>', doc.data())
          leagueList.push(doc.id)

        })
        setLeagues(leagueList)
      }
      )

  }
  const leagueItems = () => {
    getLeagues()
    console.log(leagues)
    leagues.map(league =>
      console.log(league))
  }


  return <div>
    <Card >
      <Card.Header>
        <Card.Body>
          <Card.Title>League</Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant='primary' onClick={() => leagueItems()}>Check it out</Button>
        </Card.Body>
      </Card.Header>
    </Card>
  </div>;
};

export default Leaderboard;
