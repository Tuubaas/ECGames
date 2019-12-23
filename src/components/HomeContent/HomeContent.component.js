import React from 'react';
import { Button, TextParagraph } from '../index';
import './HomeContent.css';

const HomeContentComponent = props => {
  const { user, text, link } = props;

  return (
    <div className="HomeContent">
      <TextParagraph>{text}</TextParagraph>
      <Button className="Button-Main Button-Center" link={link}>
        {user
          ? 'Hej användare, fortsätt till spel'
          : 'Sign up and/or Login to continue to game'}
      </Button>
    </div>
  );
};

export default HomeContentComponent;
