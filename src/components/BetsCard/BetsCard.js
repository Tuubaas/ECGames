import React from 'react';
import {StyledBetsCard} from './BetsCard.styled'


const BetsCard = ({bets}) => {
  return(<StyledBetsCard>
    {bets.map((bet, i) => {
      return(
        <div>{bet}</div>
      )
    })}
  </StyledBetsCard>)
}

export default BetsCard;