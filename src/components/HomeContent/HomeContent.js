import React from 'react';
import { Button, TextParagraph, UserPhoto } from '../index';
import { StyledHomeContent } from './HomeContent.styled';

const HomeContent = ({ firebase }) => {
  const { user, signInWithGoogle, signInWithFacebook } = firebase;

  return (
    <StyledHomeContent>
      <TextParagraph>{}</TextParagraph>
      {user ? (
        <React.Fragment>
          <UserPhoto src={user.photoURL} alt={user.displayName} size="L" />
          <span>Hej {user.displayName}, fortsätt till spel</span>
        </React.Fragment>
      ) : (
        <div className="HomeContent-ButtonGroup">
          <Button signIn={true} onClick={signInWithGoogle}>
            Sign In with Google
          </Button>
          <Button signIn={true} onClick={signInWithFacebook}>
            Sign In with Facebook
          </Button>
        </div>
      )}
    </StyledHomeContent>
  );
};

export default HomeContent;
