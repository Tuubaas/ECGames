import React from 'react';
import { Redirect } from 'react-router-dom';
import PageHeaderContainer from '../components/PageHeader';
import TabContainer from '../components/TabBar';

const GamePage = props => {
  const { auth } = props;
  console.log(auth, 'Game');

  /*if (!auth.loading && !auth.user) {
    return <Redirect to="/" />;
  }*/

  return (
    <React.Fragment>
      <PageHeaderContainer auth={auth} />
      <TabContainer list={['Dashboard', 'Game', 'Leaderboards', 'Etc']} />
    </React.Fragment>
  );
};

export default GamePage;
