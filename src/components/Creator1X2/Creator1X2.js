import React from 'react';
import { StyledCreator1X2 } from './Creator1X2.styled';

const Creator1X2 = ({ bet, index, handleChange, handleBlur }) => {
  const text = `bets[${index}].text`;
  const opt1 = `bets[${index}].choices.home`;
  const optX = `bets[${index}].choices.tie`;
  const opt2 = `bets[${index}].choices.away`;

  return (
    <StyledCreator1X2>
      <label htmlFor="">Bet: </label>
      <input
        type="text"
        name={text}
        value={bet.text}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div>
        <label>1.</label>
        <input
          type="text"
          name={opt1}
          value={bet.choices.home}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>X.</label>
        <input
          type="text"
          name={optX}
          value={bet.choices.tie}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>2.</label>
        <input
          type="text"
          name={opt2}
          value={bet.choices.away}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </StyledCreator1X2>
  );
};

export default Creator1X2;
