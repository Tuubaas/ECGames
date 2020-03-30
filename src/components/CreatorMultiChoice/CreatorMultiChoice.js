import React from 'react';
import { Button, MultiChoiceItem } from '../index';
import { Formik, Form, FieldArray } from 'formik';
import { StyledCreatorMultiChoice } from './CreatorMultiChoice.styled';

const CreatorMultiChoice = ({ bet, index, handleChange, handleBlur }) => {
  return (
    <StyledCreatorMultiChoice>
      <label>Bet: </label>
      <input
        type="text"
        name={`bets[${index}].text`}
        value={bet.text}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <div>
        <input
          type="text"
          name={`bets[${index}].choices[${0}].bet`}
          value={bet.choices[0].bet}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          type="text"
          name={`bets[${index}].choices[${0}].opt`}
          value={bet.choices[0].opt}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          type="text"
          name={`bets[${index}].choices[${1}].bet`}
          value={bet.choices[1].bet}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          type="text"
          name={`bets[${index}].choices[${1}].opt`}
          value={bet.choices[1].opt}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          type="text"
          name={`bets[${index}].choices[${2}].bet`}
          value={bet.choices[2].bet}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          type="text"
          name={`bets[${index}].choices[${2}].opt`}
          value={bet.choices[2].opt}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          type="text"
          name={`bets[${index}].choices[${3}].bet`}
          value={bet.choices[3].bet}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          type="text"
          name={`bets[${index}].choices[${3}].opt`}
          value={bet.choices[3].opt}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          type="text"
          name={`bets[${index}].choices[${4}].bet`}
          value={bet.choices[4].bet}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          type="text"
          name={`bets[${index}].choices[${4}].opt`}
          value={bet.choices[4].opt}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
    </StyledCreatorMultiChoice>
  );
};

export default CreatorMultiChoice;
