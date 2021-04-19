import { FieldArray, Form, Formik } from 'formik';
import React from 'react';
import { setBets } from '../../FirebaseConfig';
import Button from '../Button';
import Creator1X2 from '../Creator1X2';
import CreatorMultiChoice from '../CreatorMultiChoice';

const BetCreator = ({ bets, date }) => {
  var nbrBets = bets ? bets.bets.length : 0

  const submitBets = (values) => {
    setBets(date, values)
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{bets:bets ? bets.bets : []}}
      onSubmit={values => submitBets(values)}
    >
      {({ values, touched, handleChange, handleBlur }) => {
        return (
          <Form noValidate autoComplete="off">
            <FieldArray name="bets">
              {({ push, remove }) => (
                <div>
                  {values.bets.map((bet, i) => (
                    <React.Fragment key={i}>
                      {bet.type === 'MULTI' ? (
                        <CreatorMultiChoice
                          bet={bet}
                          index={i}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                      ) : (
                        <Creator1X2
                          bet={bet}
                          index={i}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                      )}
                      <Button type="button" onClick={() => remove(i)}>-</Button>
                    </React.Fragment>
                  ))}
                  <Button
                    type="button"
                    onClick={() =>
                      push({
                        betID:nbrBets++,
                        type: 'MULTI',
                        text: '',
                        choices: [
                          { bet: '', opt: '' },
                          { bet: '', opt: '' },
                          { bet: '', opt: '' },
                          { bet: '', opt: '' },
                          { bet: '', opt: '' }
                        ]
                      })
                    }
                  >
                    + Multi
                  </Button>
                  <Button
                    type="button"
                    onClick={() =>
                      push({
                        betID:nbrBets++,
                        type: '1X2',
                        text: '',
                        choices: { '1': '', 'X': '', '2': '' }
                      })
                    }
                  >
                    + 1X2
                  </Button>
                </div>
              )}
            </FieldArray>
            <Button type="submit">Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BetCreator;
