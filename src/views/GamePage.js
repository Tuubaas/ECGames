import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import {
  Bet1X2,
  BetMultiChoice,
  ActionWrapper,
  DatePicker,
  Button
} from '../components';
import { useOnClickOutside } from '../hooks';


const GamePage = ({ firebase }) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [userBets, setUserBets] = useState({})
  const [bets, setBets] = useState(null);


  useEffect(() => {
    if(firebase.user){
      fetch(`http://127.0.0.1:5000/bets/2021-01-01`, {method: 'GET'})
      .then(res => res.json())
      .then(response => {
        setBets(response)
      })
    }
  }, [firebase.user, date]);

  useEffect(() => {
    if(firebase.user){
      fetch(`http://127.0.0.1:5000/userbets/${firebase.user.uid}/${date}`, {method: 'GET'})
      .then(res => res.json())
      .then(response => {
        setUserBets(response)
      })
    }
  }, [firebase.user, date])

  const getBet = (bet, key) => {
    switch(bet.type){
      case '1X2':
        return <Bet1X2 key={key} bet={bet.text} options={bet.options} id={bet.betID} userBets={userBets} setUserBets={setUserBets} />
      case 'Multi':
        return <BetMultiChoice key={key} bet={bet.text} options={bet.choices} id={bet.betID} userBets={userBets} setUserBets={setUserBets} />
      default:
        return <React.Fragment/>
    }
  }

  const sendUserBets = () => {
    const postReqOpts = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userBets)
    }
    fetch(`http://127.0.0.1:5000/userbets/${firebase.user.uid}/${date}`, postReqOpts).then(data => data.json())
  }


  const [show, setShow] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setShow(false));
  console.log(userBets);

  return (
    <div>
      <div ref={node}>
        <div style={{ height: '10px' }} onClick={() => setShow(!show)}></div>
        <ActionWrapper show={show}>
          <DatePicker setDate={setDate} />
        </ActionWrapper>
      </div>
      {bets ? bets.bets.map((bet, i) => {
        return(
          getBet(bet, i)
        )
      }) : <React.Fragment/>}
      <Button main={true} onClick={() => sendUserBets()}>
        Save
      </Button>
    </div>
  );
};

export default GamePage;
