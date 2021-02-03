import React, { useEffect, useState } from 'react';
import {DashboardContent, DashboardLeague} from '../components';

const Dashboard = ({firebase}) => {

  const [bio, setBio] = useState(null);

  const [leagueInfo, setLeagueInfo] = useState([]);

  const [betsInfo, setBetsInfo] = useState(null);

  useEffect(() => {
    if(firebase.user){
      fetch('http://127.0.0.1:5000/user/' + firebase.user.uid, {method: 'GET'})
      .then(res =>  res.json())
      .then(response => {
        setBio(response);
      });
    }
  }, [firebase.user])

  useEffect(() => {
    if(bio){
      let tmp = bio.leagues.map(league => {
        return new Promise((resolve, reject) => {
          resolve(fetch('http://127.0.0.1:5000/leagues/' + league, {method: 'GET'}))
          reject(new Error('reject'))
      })
      .then(res => res.json())
      });

      Promise.all(tmp)
      .then(data => {
        setLeagueInfo(data);
      })
    }
  }, [bio])

  useEffect(() => {
    // For fetching bets
  })
  /**
   * Pseudo code:
   * fetch todays bets as a list of object preferrably using useEffect
   */

  return (<div>
    <DashboardContent firebase={firebase} bio={bio} leagues={leagueInfo} />
  </div>);
};

export default Dashboard;
