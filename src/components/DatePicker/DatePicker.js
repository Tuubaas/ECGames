import React from 'react';
import moment from 'moment';
import { StyledDatePicker } from './DatePicker.styled';

const DatePicker = ({ setDate }) => {
  const week = [0, 1, 2, 3, 4, 5, 6].map(i => {
    return moment()
      .add(i, 'days')
      .format('DD-MM-YYYY');
  });

  return (
    <StyledDatePicker>
      {week.map((date, i) => {
        return (
          <div key={i} onClick={() => setDate(date)}>
            {date}
          </div>
        );
      })}
    </StyledDatePicker>
  );
};

export default DatePicker;
