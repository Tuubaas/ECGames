import React from 'react';
import {StyledDashboardContent} from './DashboardContent.styled';
import {BioContent, DashboardLeague} from '..';

const DashboardContent = ({firebase, bio, leagues}) => {

  return(
  <StyledDashboardContent>
    <div className="DashboardContent-group">
      <BioContent firebase={firebase} bio={bio} />
      <DashboardLeague leagues={leagues}/>
    </div>
    {/*<DashboardBets />*/}
  </StyledDashboardContent>)
}

export default DashboardContent;