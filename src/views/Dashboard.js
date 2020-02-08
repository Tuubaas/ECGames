import React from 'react';
import TabBar from '../components/TabBar';

const Dashboard = props => {
  console.log(props, 'Game');

  /*if (!auth.loading && !auth.user) {
    return <Redirect to="/" />;
  }*/

  /**
   * Pseudo code:
   * fetch todays bets as a list of object preferrably using useEffect
   */

  return (
    <React.Fragment>
      <TabBar list={['Dashboard', 'Game', 'Leaderboards', 'Etc']} />
    </React.Fragment>
  );
};

export default Dashboard;
