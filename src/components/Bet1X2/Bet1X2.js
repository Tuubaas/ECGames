import React, { useEffect, useState } from 'react';
import { StyledBet1X2 } from './Bet1X2.styled';

const Bet1X2 = ({ bet, options, id, userBets, setUserBets }) => {
  let bool = id in userBets
  const [active, setActive] = useState(bool ? userBets[id] : '')
  const keys = ['1', 'X', '2']


  useEffect(() => {
    setActive((id in userBets) ? userBets[id] : '')
  }, [userBets, id])

  const handleClick = (key) => {
    if(userBets[id] === key){
      delete userBets[id]
      setActive(null)
    }
    else {
      setActive(key)
      setUserBets({...userBets, [id]:key})
    }
  }

  return (
    <StyledBet1X2>
      <span>{bet}</span>
      <div>
        {keys.map(key => {
          return <div value={options[key]} key={key} onClick={() => handleClick(key)} className={active === key ? 'Bet1X2-Button-Active' : 'Bet1X2-Button'}>
            {options[key]}
          </div>
        })}
      </div>
    </StyledBet1X2>
  );
};

export default Bet1X2;
