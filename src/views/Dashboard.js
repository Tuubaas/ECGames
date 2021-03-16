import React, { useEffect, useState } from 'react';
import {DashboardContent, DashboardLeague} from '../components';
import {getLeague, getUser} from '../FirebaseConfig'

const Dashboard = ({user}) => {

  const [bio, setBio] = useState(null);

  const [leagueInfo, setLeagueInfo] = useState([]);

  const [betsInfo, setBetsInfo] = useState(null);




  useEffect(() => {
    if(user){
      let leaguePromises = user.leagues.map(league => (
        getLeague(league).then(res => res.data())
      ))
      Promise.all(leaguePromises).then(data => {
        setLeagueInfo(data)
      })
    }
  }, [user])

  useEffect(() => {
    // For fetching bets
  })
  /**
   * Pseudo code:
   * fetch todays bets as a list of object preferrably using useEffect
   */
  console.log(leagueInfo);

  return (<div>
    <DashboardContent user={user} leagues={leagueInfo} />
  </div>);
};

export default Dashboard;
