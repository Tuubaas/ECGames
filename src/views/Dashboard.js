import React from 'react';
import TabBar from '../components/TabBar';

const Dashboard = props => {
  /**
   * Pseudo code:
   * fetch todays bets as a list of object preferrably using useEffect
   */

  return (
    <React.Fragment>
      <TabBar list={['Dashboard', 'Game', 'Leaderboards', 'About']} />
    </React.Fragment>
  );
};

export default Dashboard;
