import React from 'react';
import HomeContent from '../components/HomeContent';

const HomeContentContainer = props => {
  const getIntroText = () => {
    return 'Här ska det stå ngot om spelet, någon kul ovh inbjudande text. Denf år gärna vara lång och rolig, för sånt gillar våra polare. Gärna lite lame också, för det tycker jag är kul. Om jag ska ändra något på texten så är det bara att säga till, typ storlek, bold, etc.';
  };

  return <HomeContent {...props} text={getIntroText()} link="/odds-em" />;
};

export default HomeContentContainer;
