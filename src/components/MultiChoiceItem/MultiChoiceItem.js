import React from 'react';
import { StyledMultiChoiceItem } from './MultiChoiceItem.styled';

const MultiChoiceItem = ({ add, remove, update, choice, index }) => {
  return (
    <StyledMultiChoiceItem>
      <input
        type="text"
        value={choice.text ? choice.text : ''}
        onChange={e => update(index, e.target.value)}
      />
      <input
        type="number"
        value={choice.bet ? choice.bet : ''}
        onChange={e => update(index, e.target.value)}
      />
      <button onClick={() => add(index)} />
      <button onClick={() => remove(index)} />
    </StyledMultiChoiceItem>
  );
};

export default MultiChoiceItem;
