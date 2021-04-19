import React from 'react';
import { Button } from '..';
import { StyledLeaderboardCard } from './LeaderboardCard.styled';

const LeaderboardCard = ({league}) => {
  console.log(league);
  return (<StyledLeaderboardCard>
    <div className="LeaderboardCard-Title">{league.name}</div>
    <div className="LeaderboardCard-Info">
      <div className="LeaderboardCard-IconText"><div>&#x1f3c6;</div><div>PLACING</div></div>
      <div className="LeaderboardCard-IconText"><div>ICON</div><div>CHANGE</div></div>
    </div>
    <Button type="button">Go To League </Button>
  </StyledLeaderboardCard>)
}

export default LeaderboardCard;