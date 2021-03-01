import React, { useState, useEffect } from 'react';
import { StyledBetMultiChoice } from './BetMultiChoice.styled';

const BetMultiChoice = ({ bet, options, id, userBets, setUserBets }) => {
  const [active, setActive] = useState(null)

  useEffect(() => {
    setActive(userBets[id])
  }, [userBets, id])

  const handleClick = (i) => {
    if(userBets[id] === i){
      delete userBets[id]
      setActive(null)
    }
    else {
      setActive(i)
      setUserBets({...userBets, [id]:i})
    }
  }

  return (
    <StyledBetMultiChoice>
      <span>{bet}</span>
      <div className="BetMultiChoice-Wrapper">
        {options.map((option, i) => (
          <div value={option.choice} key={i} onClick={() => handleClick(i)} className={active === i ? 'BetMultiChoice-Button-Active' : 'BetMultiChoice-Button'}>
            {option.choice}
          </div>
        ))}
      </div>
    </StyledBetMultiChoice>
  );
};

export default BetMultiChoice;
