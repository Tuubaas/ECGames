import React, { useContext } from 'react';
import PageHeaderComponent from './PageHeader.component';
//import { ReactComponent as OddsEmLogo } from '../OddsEM-grey.svg';
import { withFirebase } from '../../Firebase';

const PageHeader = ({ firebase }) => {
  //const [auth, setAuth] = useContext(AuthContext);
  const { user, singOut, signInWithGoogle, signInWithFacebook } = firebase.auth
    ? firebase.auth
    : {};

  const getUserModuleInfo = () => {
    return user
      ? {
          name: user.displayName,
          userAction: singOut,
          imageSrc: user.photoURL,
          imageAlt: 'Profile',
          buttonText: 'Sign out'
        }
      : {
          name: '',
          userAction: signInWithFacebook,
          imageSrc: '',
          imageAlt: '',
          buttonText: 'Sign in'
        };
  };

  return <PageHeaderComponent {...getUserModuleInfo()} logo={''} />;
};

export default withFirebase(PageHeader);
