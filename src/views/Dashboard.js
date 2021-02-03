import React, { useEffect, useState } from 'react';
import {DashboardContent, DashboardLeague} from '../components';

const Dashboard = props => {

  const [bio, setBio] = useState(null);
  const [loadingBio, setLoadingBio] = useState(true);

  const [leagueInfo, setLeagueInfo] = useState([]);
  const [loadingLeague, setLoadingLeague] = useState(true);

  const [betsInfo, setBetsInfo] = useState(null);
  const [loadingBets, setLoadingBets] = useState(null);

  useEffect(() => {
    if(props.firebase.user){
      fetch('http://127.0.0.1:5000/user/' + props.firebase.user.uid, {method: 'GET'})
      .then(res =>  res.json())
      .then(response => {
        if(loadingBio){
          setBio(response);
          setLoadingBio(false);
        }
      });
    }
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
        if (loadingLeague) {
          setLeagueInfo(data);
          setLoadingLeague(false);
        }
      })
    }

  })
  /**
   * Pseudo code:
   * fetch todays bets as a list of object preferrably using useEffect
   */

  return (<div>
    <DashboardContent firebase={props.firebase} bio={bio} leagues={leagueInfo} />
  </div>);
};

export default Dashboard;
