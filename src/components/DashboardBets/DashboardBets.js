import React from 'react';
import {StyledDashboardBets} from './DashboardBets.styled';
import {BetsCard} from '..';

const DashboardBets = ({bets}) => {
  return(<StyledDashboardBets className="DashboardBets-Group">
    {bets.map((dateBets, i) => {
      return(
      <BetsCard key={i} bets={dateBets}/>
      )
    })}
  </StyledDashboardBets>)
}

export default DashboardBets;