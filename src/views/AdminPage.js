import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { BetCreator, DatePicker } from '../components';

const AdminPage = ({ firestore, firebase }) => {
  const [date, setDate] = useState(moment().format('DD-MM-YYYY'));
  const [bets, setBets] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (firebase.user && loading) {
      firestore
        .collection('users')
        .doc(firebase.user.uid)
        .collection('Bets')
        .doc(date)
        .get()
        .then(doc => {
          const data = doc.data();
          if (data) {
            setBets(data);
          } else {
            setBets({});
          }
          setLoading(false);
        });
    }
  }, [firebase, firestore, date, loading]);

  const submitToDB = values => {
    console.log(values);

    firestore
      .collection('users')
      .doc(firebase.user.uid)
      .collection('Bets')
      .doc(date)
      .set(values);
  };

  return (
    <div>
      <DatePicker setDate={setDate} setLoading={setLoading} />
      <BetCreator bets={bets} submitToDB={submitToDB} />
    </div>
  );
};

export default AdminPage;
