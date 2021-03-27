import React from 'react';
import { StyledDashboardLeague } from './DashboardLeague.styled';

const DashboardLeague = ({leagues}) => {
  if(leagues){
  return (<StyledDashboardLeague>

  </StyledDashboardLeague>)}
  else{
    return <div></div>
  }
}

export default DashboardLeague;