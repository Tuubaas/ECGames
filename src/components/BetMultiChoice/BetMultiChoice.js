import React from 'react';
import { StyledBetMultiChoice } from './BetMultiChoice.styled';

const BetMultiChoice = ({ bet, options }) => {
  return (
    <StyledBetMultiChoice>
      <span>{bet}</span>
      <div className="BetMultiChoice-Wrapper">
        {options.map((option, i) => (
          <div value={option} key={i}>
            {option}
          </div>
        ))}
      </div>
    </StyledBetMultiChoice>
  );
};

export default BetMultiChoice;
