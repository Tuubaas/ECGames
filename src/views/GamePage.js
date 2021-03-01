import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import {
  Bet1X2,
  BetMultiChoice,
  ActionWrapper,
  DatePicker,
  Button, 
  Loader
} from '../components';
import { useOnClickOutside } from '../hooks';


const GamePage = ({ firebase }) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [userBets, setUserBets] = useState({})
  const [bets, setBets] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if(firebase.user){
      fetch(`http://127.0.0.1:5000/bets/2021-01-01`, {method: 'GET'})
      .then(res => res.json())
      .then(response => {
        setBets(response)
        setLoading(false)
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

  return (
    <div>
      <div ref={node} style={{marginBottom: "2%"}}>
        <Button onClick={() => setShow(!show)}>{date}</Button>
        <ActionWrapper show={show}>
          <DatePicker setDate={setDate} setLoading={setLoading}/>
        </ActionWrapper>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center", marginBottom:"2%"}}>
        {bets || !loading ? bets.bets.map((bet, i) => {
          return(
            getBet(bet, i)
          )
        }) : <Loader />}
      </div>
      <Button main={true} onClick={() => sendUserBets()}>
        Save
      </Button>
    </div>
  );
};

export default GamePage;
