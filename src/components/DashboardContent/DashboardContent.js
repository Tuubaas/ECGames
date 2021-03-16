import React from 'react';
import {StyledDashboardContent} from './DashboardContent.styled';
import {BioContent, DashboardLeague} from '..';

const DashboardContent = ({ user, leagues}) => {

  return(
  <StyledDashboardContent>
    <div className="DashboardContent-group">
      <BioContent user={user} />
      <DashboardLeague leagues={leagues}/>
    </div>
    {/*<DashboardBets />*/}
  </StyledDashboardContent>)
}

export default DashboardContent;