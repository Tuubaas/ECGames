import React from 'react';
import moment from 'moment';
import { StyledDatePicker } from './DatePicker.styled';

const DatePicker = () => {
  const week = [0, 1, 2, 3, 4, 5, 6];

  return (
    <StyledDatePicker>
      {week.map(i => {
        return (
          <div key={i}>
            {moment()
              .add(i, 'days')
              .format('ddd DD-MM-YYYY')}
          </div>
        );
      })}
    </StyledDatePicker>
  );
};

export default DatePicker;
