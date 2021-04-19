import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BetCreator, DatePicker, Loader } from '../components';
import { getBets } from '../FirebaseConfig';


const AdminPage = ({ user }) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [bets, setBets] = useState(undefined);
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
