import React from 'react';
import { MultiChoiceItem } from '../index';

const CreatorMultiChoice = ({ choices, setChoices }) => {
  const add = i => {
    choices.splice(i, 0, '');
    setChoices(choices);
  };

  const remove = i => {
    choices.splice(i, 1);
    setChoices(choices);
  };

  const update = (i, value) => {
    choices[i] = value;
    setChoices(choices);
  };

  return (
    <div>
      {choices.length > 0 ? (
        choices.map((choice, i) => (
          <MultiChoiceItem
            add={add}
            remove={remove}
            update={update}
            choice={choice}
            index={i}
          />
        ))
      ) : (
        <div className="test"></div>
      )}
    </div>
  );
};

export default CreatorMultiChoice;
