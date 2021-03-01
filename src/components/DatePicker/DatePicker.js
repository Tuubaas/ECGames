import React from 'react';
import moment from 'moment';
import { StyledDatePicker } from './DatePicker.styled';

const DatePicker = ({ setDate, setLoading }) => {
  const week = [0, 1, 2, 3, 4, 5, 6].map(i => {
    return moment()
      .add(i, 'days')
      .format('YYYY-MM-DD');
  });

  return (
    <StyledDatePicker>
      {week.map((date, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setDate(date)
              setLoading(true)
            }}
          >
            {date}
          </div>
        );
      })}
    </StyledDatePicker>
  );
};

export default DatePicker;
