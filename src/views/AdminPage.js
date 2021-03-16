import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { BetCreator, DatePicker } from '../components';
import { getBets } from '../FirebaseConfig';

const AdminPage = ({ firestore }) => {
  const [date, setDate] = useState(moment().format('DD-MM-YYYY'));
  const [bets, setBets] = useState({});

  useEffect(() => {
    getBets(date).then(res => setBets(res.data()))
    // if(firebase.user){
    //   fetch('http://127.0.0.1:5000/bets/' + date, {method: 'GET'})
    //   .then(res => res.json())
    //   .then(response => {
    //     setBets(response)
    //   })
    // }
  }, [date]);

  const submitToDb = values => {
    console.log(values);

    firestore
      .collection('bets')
      .doc(date)
      .set(values);
  };

  return (
    <div>
      <DatePicker setDate={setDate}/>
      <BetCreator bets={bets} submitToDb={submitToDb} />
    </div>
  );
};

export default AdminPage;
