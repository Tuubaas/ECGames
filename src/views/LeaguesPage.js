import React, { useEffect, useState } from 'react';
import { LeaderboardCard, Loader, NewLeagueHandler } from '../components';
import { getLeague } from '../FirebaseConfig';

const LeaguesPage = ({user}) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [userLeagues, setUserLeagues] = useState([])
  const [leagues, setLeagues] = useState([])

  // useEffect(() => {
  //   let tmp = []
  //   getUsers().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       tmp.push(doc.data())
  //     })
  //   }).then(setUsers(tmp))
  // }, []);

  useEffect(() => {
    if (user){
      setUserLeagues(user.leagues)
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
      let tmp = userLeagues.map(league => {
        return getLeague(league).then(res => res.data())
      });

      Promise.all(tmp)
      .then(data => {
        setLeagues(data);
      })
  }, [userLeagues])

  const sortUsers = (users) => {
    return users.sort((a, b) => (a.balance < b.balance) ? 1 : (a.name < b.name) ? 1 : -1)
  }



  return (
   <div>
    {user && <NewLeagueHandler user={user} />}
    {leagues && <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      {leagues.map(league => {
        return <LeaderboardCard key={league.id} league={league} />
      }
      )}
    </div>}
    {loading && <Loader />}
  </div>)
};

export default LeaguesPage;
