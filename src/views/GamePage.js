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

  useEffect(() => {
    firebase.user
      ? firestore
          .collection(firebase.user.uid)
          .doc(date)
          .get()
          .then(doc => {
            const data = doc.data();
            console.log(data);
          })
      : console.log('Not logged in');
  });

  const addData = () => {
    const data = { '1': 1, '2': 'Granen' };

    firestore
      .collection(firebase.user.uid)
      .doc(date)
      .set(data)
      .then(console.log('data added'));
  };

  const [show, setShow] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setShow(false));

  const test = () => {
    console.log('set to: ' + !show);
    setShow(!show);
  };

  return (
    <div>
      <div ref={node}>
        <div style={{ height: '10px' }} onClick={() => test()}></div>
        <ActionWrapper show={show}>
          <DatePicker />
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
