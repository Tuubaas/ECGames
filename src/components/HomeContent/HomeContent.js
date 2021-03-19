import React from 'react';
import { Button, TextParagraph, UserPhoto } from '../index';
import { StyledHomeContent } from './HomeContent.styled';
import {googleSignIn, facebookSignIn} from '../../FirebaseConfig'

const HomeContent = ({user}) => {
console.log();
  return (
    <StyledHomeContent>
      <TextParagraph>{}</TextParagraph>
      {user ? (
        <React.Fragment>
          <UserPhoto src={user.photoURL} alt={user.name} size="L" />
          <span>Hej {user.name}, fortsätt till spel</span>
        </React.Fragment>
      ) : (
        <div className="HomeContent-ButtonGroup">
          <Button signIn={true} onClick={() => googleSignIn()}>
            Sign In with Google
          </Button>
          <Button signIn={true} onClick={() => facebookSignIn()}>
            Sign In with Facebook
          </Button>
        </div>
      )}
    </StyledHomeContent>
  );
};

export default HomeContent;
