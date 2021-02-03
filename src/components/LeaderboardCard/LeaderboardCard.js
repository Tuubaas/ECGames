import React from 'react';
import {StyledLeaderboardCard} from './LeaderboardCard.styled';

const LeaderboardCard = ({league}) => {
  //console.log(league);
  return (<StyledLeaderboardCard>
    <div className="LeaderboardCard-Title">{league.name}</div>
    {league.members.map((member, i) => {
      return <div className="LeaderboardCard-List" key={i}>{member}</div>
    })}
  </StyledLeaderboardCard>)
}

export default LeaderboardCard;