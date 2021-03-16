import React from 'react'
import {StyledLeaderboardItem} from './LeaderboardItem.styled'

const LeaderboardItem = ({user, pos}) => {
  return (
    <StyledLeaderboardItem index={pos % 2 === 0}>
      <span id={"LeaderboardItem-Pos"}>{pos}</span>
      <span id={"LeaderboardItem-Name"}>{user.name}</span>
      <span id={"LeaderboardItem-Bal"}>{'$ ' + user.balance}</span>
    </StyledLeaderboardItem>
  )
}

export default LeaderboardItem