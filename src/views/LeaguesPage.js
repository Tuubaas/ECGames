import React, { useEffect, useState } from 'react';
import { Button, GlobalLeaderboard, LeaderboardCard, Loader } from '../components';
import { getLeague, getUser, getUsers } from '../FirebaseConfig';

const LeaguesPage = ({user}) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [userLeagues, setUserLeagues] = useState([])
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    let tmp = []
    getUsers().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tmp.push(doc.data())
      })
    }).then(setUsers(tmp))
  }, []);

  useEffect(() => {
    if (user){
      setUserLeagues(user.leagues)
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    if(loading){
      let tmp = userLeagues.map(league => {
        return getLeague(league).then(res => res.data())
      });

      Promise.all(tmp)
      .then(data => {
        setLeagues(data);
      })
    }
  }, [userLeagues, loading])

  const sortUsers = (users) => {
    return users.sort((a, b) => (a.balance < b.balance) ? 1 : (a.name < b.name) ? 1 : -1)
  }

  return loading ? <Loader /> :
   <div style={{display:'flex', flexDirection: 'row', marginTop: '3%'}}>
    <GlobalLeaderboard users={sortUsers(users)}/>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Button link={'/new'}>Create League</Button>
      {leagues.map(league => (
        <LeaderboardCard key={league.id} league={league} />
      ))}
    </div>
  </div>;
};

export default LeaguesPage;
