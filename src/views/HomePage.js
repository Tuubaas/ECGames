import React from 'react';
import PageHeaderContainer from '../containers/PageHeader.container';
import HomeContentContainer from '../containers/HomeContent.container';

const HomePage = props => {
  const { auth } = props;
  return (
    <React.Fragment>
      <PageHeaderContainer auth={auth} />
      <HomeContentContainer />
    </React.Fragment>
  );
};

export default HomePage;
