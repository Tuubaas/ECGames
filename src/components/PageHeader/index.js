import React /*, { useContext }*/ from 'react';
import PageHeaderComponent from './PageHeader.component';
//import { ReactComponent as OddsEmLogo } from '../OddsEM-grey.svg';
const PageHeader = ({ firebase }) => {
  const { user, signOut, signInWithGoogle, signInWithFacebook } = firebase;

  //console.log(firebase);
  const getUserModuleInfo = () => {
    return user
      ? {
          name: user.displayName,
          userAction: signOut,
          imageSrc: user.photoURL,
          imageAlt: 'Profile',
          buttonText: 'Sign out'
        }
      : {
          name: '',
          userAction: signInWithGoogle,
          imageSrc: '',
          imageAlt: '',
          buttonText: 'Sign in'
        };
  };

  return <PageHeaderComponent {...getUserModuleInfo()} logo={''} />;
};

export default PageHeader;
