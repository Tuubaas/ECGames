import React from 'react';
import { BioContent, LeaderboardCard } from '..';
import { StyledDashboardContent } from './DashboardContent.styled';

const DashboardContent = ({ user, leagues}) => {
  leagues = leagues.length >= 1 ? leagues : [{name:"Test league", members:["Tobias", "Hanna"]}]
  console.log(leagues);
  return(
  <StyledDashboardContent>
    <div className="DashboardContent-group">
      <BioContent user={user} />
      My Leagues
      {leagues && leagues.map((league, i) => {
        return (<LeaderboardCard key={i} league={league}/>)
      })}
    </div>
    {/*<DashboardBets />*/}
  </StyledDashboardContent>)
}

export default DashboardContent;