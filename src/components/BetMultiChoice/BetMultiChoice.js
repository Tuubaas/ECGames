import React, { useEffect, useState } from 'react';
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
console.log(options);
  return (
    <StyledBetMultiChoice>
      <span id="BetMultiChoice-Title">{bet}</span>
      <div className="BetMultiChoice-Wrapper">
        {options.map((option, i) => (
          <div value={option.opt} key={i} onClick={() => handleClick(i)} className={active === i ? 'BetMultiChoice-Button-Active' : 'BetMultiChoice-Button'}>
            <span>{option.opt}</span>
            <span>{parseFloat(option.bet).toFixed(2)}</span>
          </div>
        ))}
      </div>
    </StyledBetMultiChoice>
  );
};

export default BetMultiChoice;
