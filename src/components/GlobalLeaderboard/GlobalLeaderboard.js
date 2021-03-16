import React from 'react'
import {StyledGlobalLeaderboard} from './GlobalLeaderboard.styled'
import {LeaderboardItem, H1} from '..'

const GlobalLeaderboard = ({users}) => {
  return(
  <StyledGlobalLeaderboard>
    <H1>GLOBAL LEADERBOARD</H1>
    {users.map((user, i) => (
      <LeaderboardItem key={user.user_id} user={user} pos={i+1}/>
    ))}
  </StyledGlobalLeaderboard>)
}

export default GlobalLeaderboard