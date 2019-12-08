import React, { useContext } from 'react';
import PageHeader from '../components/PageHeader';
//import { ReactComponent as OddsEmLogo } from '../OddsEM-grey.svg';

const PageHeaderContainer = props => {
  const { auth } = props;
  //const [auth, setAuth] = useContext(AuthContext);
  const { user, singOut, signInWithGoogle, signInWithFacebook } = auth
    ? auth
    : {};

  const getUserModuleInfo = () => {
    return user
      ? {
          name: user.displayName,
          userAction: singOut,
          imageSrc: user.photoURL,
          imageAlt: 'Profile',
          buttonText: 'Sing out'
        }
      : {
          name: '',
          userAction: signInWithFacebook,
          imageSrc: '',
          imageAlt: '',
          buttonText: 'Sign in'
        };
  };

  return <PageHeader {...getUserModuleInfo()} logo={''} />;
};

export default PageHeaderContainer;
