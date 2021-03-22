import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { BetCreator, DatePicker, Loader } from '../components';
import { getBets } from '../FirebaseConfig';
import { Redirect } from 'react-router-dom';


const AdminPage = ({ user }) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [bets, setBets] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBets(date).then(res => {
      setBets(res.data());
      setLoading(false)
    })
  }, [date]);

  return (
    user ?
      user.admin ?
        <div>
          <DatePicker setDate={setDate}/>
          <BetCreator bets={bets} date={date} />
        </div> : <Redirect to="/"/>
      : <Loader />
  );
};

export default AdminPage;
