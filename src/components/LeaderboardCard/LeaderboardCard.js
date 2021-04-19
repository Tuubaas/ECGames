import React from 'react';
import { Button } from '..';
import { StyledLeaderboardCard } from './LeaderboardCard.styled';

const LeaderboardCard = ({league}) => {
  return (<StyledLeaderboardCard>
    <div className="LeaderboardCard-Title">{league.name}</div>
    <div className="LeaderboardCard-Info">
      <div className="LeaderboardCard-IconText"><div>&#x1f3c6;</div><div>PLACING</div></div>
      <div className="LeaderboardCard-IconText"><div>ICON</div><div>CHANGE</div></div>
    </div>
    <Button link={`/leagues/${league.id}`}>Go To League </Button>
  </StyledLeaderboardCard>)
}

export default LeaderboardCard;