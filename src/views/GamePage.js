import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import {
  Bet1X2,
  BetMultiChoice,
  ActionWrapper,
  DatePicker
} from '../components';
import { useOnClickOutside } from '../hooks';


const GamePage = ({ firebase, firestore }) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [bets, setBets] = useState([]);


  useEffect(() => {
    if(firebase.user){
      fetch('http://127.0.0.1:5000/bets/' + date, {method: 'GET'})
      .then(res => res.json())
      .then(response => {
        setBets(response)
      })
    }
  }, [firebase.user, date]);

  const [show, setShow] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setShow(false));

  return (
    <div>
      <div ref={node}>
        <div style={{ height: '10px' }} onClick={() => setShow(!show)}></div>
        <ActionWrapper show={show}>
          <DatePicker setDate={setDate} />
        </ActionWrapper>
      </div>
      <Bet1X2 bet={'Sverige - Danmark'} options={[1.85, 4.0, 9.0]} />
      <BetMultiChoice
        bet={'Målskytt'}
        options={['Zlatan', 'Messi', 'Granen', 'Isak', 'VNL', 'Forsberg']}
      />
    </div>
  );
};

export default GamePage;
