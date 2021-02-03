import React, { useState } from 'react';
import moment from 'moment';
import { Formik, Form, FieldArray } from 'formik';
import { DatePicker, CreatorMultiChoice } from '../components';

const AdminPage = () => {
  const [date, setDate] = useState(moment().format('DD-MM-YYYY'));
  const [bets, setBets] = useState([]);

  return (
    <div>
      {/*<DatePicker setDate={setDate} />*/}
      <Formik initialValues={{ bets: bets }} onSubmit={() => {}}>
        {({ values, touched, handleChange, handleBlur }) => (
          <Form noValidate autoComplete="off">
            <FieldArray name="bets">
              {({ push, remove }) => (
                <div>
                  {values.bets.map(bet => {
                    return bet.type === 'multi' ? (
                      <div className="multi" />
                    ) : (
                      <div className="1X2" />
                    );
                  })}
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
      {bets.length > 0 ? (
        bets.map(bet => {
          return bet.type === 'multi' ? (
            <CreatorMultiChoice choices={bet.choices} text={bet.text} />
          ) : (
            <div className="1X2" />
          );
        })
      ) : (
        <div className="NoBet" />
      )}
    </div>
  );
};

export default AdminPage;
