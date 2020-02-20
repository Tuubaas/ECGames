import React from 'react';
import { StyledBet1X2 } from './Bet1X2.styled';

const Bet1X2 = ({ bet, options }) => {
  return (
    <StyledBet1X2>
      <span>{bet}</span>
      <div>
        {options.map((option, i) => (
          <div value={option} key={i}>
            {option}
          </div>
        ))}
      </div>
    </StyledBet1X2>
  );
};

export default Bet1X2;
