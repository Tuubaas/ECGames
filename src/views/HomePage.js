import React from 'react';
import PageHeader from '../containers/PageHeader.container';

const HomePage = props => {
  const { auth } = props;
  return (
    <React.Fragment>
      <PageHeader auth={auth} />
      {/*<HomeContent />*/}
    </React.Fragment>
  );
};

export default HomePage;
