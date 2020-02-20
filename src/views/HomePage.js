import React from 'react';
import { PageHeader, HomeContent } from '../components';

const HomePage = ({ firebase }) => {
  return (
    <React.Fragment>
      {/*<PageHeader />*/}
      <HomeContent firebase={firebase} />
    </React.Fragment>
  );
};

export default HomePage;
