import React from 'react';
import {StyledDashboardLeague} from './DashboardLeague.styled';
import {LeaderboardCard} from '..';

const DashboardLeague = ({leagues}) => {
  if(leagues){
  return (<StyledDashboardLeague>
    {leagues.map((league, i) => {
      return (<LeaderboardCard key={i} league={league}/>)
    })}
  </StyledDashboardLeague>)}
  else{
    return <div></div>
  }
}

export default DashboardLeague;