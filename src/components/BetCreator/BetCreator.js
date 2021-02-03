import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import CreatorMultiChoice from '../CreatorMultiChoice';
import Creator1X2 from '../Creator1X2';
import Button from '../Button';

const BetCreator = ({ bets, submitToDB }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{ bets: bets.bets ? bets.bets : [] }}
      onSubmit={values => submitToDB(values)}
    >
      {({ values, touched, handleChange, handleBlur }) => {
        return (
          <Form noValidate autoComplete="off">
            <FieldArray name="bets">
              {({ push, remove }) => (
                <div>
                  {values.bets.map((bet, i) => (
                    <React.Fragment key={i}>
                      {bet.type === 'multi' ? (
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
                      <Button onClick={() => remove(i)}>-</Button>
                    </React.Fragment>
                  ))}
                  <Button
                    type="button"
                    onClick={() =>
                      push({
                        type: 'multi',
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
                        type: '1X2',
                        text: '',
                        choices: { home: '', tie: '', away: '' }
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
