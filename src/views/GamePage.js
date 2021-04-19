import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActionWrapper, Bet1X2,
  BetMultiChoice,


  Button, DatePicker,

  Loader
} from '../components';
import { getBets, getUserbets, setUbets } from '../FirebaseConfig';
import { useOnClickOutside } from '../hooks';


const GamePage = ({ user }) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [userbets, setUserBets] = useState({})
  const [bets, setBets] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if(user){
      getBets(date).then(res => {
        setBets(res.data())
        setLoading(false)
      })
    }
  }, [user, date]);

  useEffect(() => {
    if(user){
      getUserbets(user.id, date).then(res => {res.data() && setUserBets(res.data())})
    }
  }, [user, date])

  const getBet = (bet, key) => {
    switch(bet.type){
      case '1X2':
        return <Bet1X2 key={key} bet={bet.text} options={bet.choices} id={bet.betID} userBets={userbets} setUserBets={setUserBets} />
      case 'MULTI':
        return <BetMultiChoice key={key} bet={bet.text} options={bet.choices} id={bet.betID} userBets={userbets} setUserBets={setUserBets} />
      default:
        return <React.Fragment/>
    }
  }

  const sendUserBets = () => {
    console.log(userbets);
    setUbets(user.id, date, userbets)
  }


  const [show, setShow] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setShow(false));

  console.log(moment(moment()).isAfter(moment(date).add(12, 'h')));



  return (
    <div>
      <div ref={node} style={{marginBottom: "2%"}}>
        <Button onClick={() => setShow(!show)}>{date}</Button>
        <ActionWrapper show={show}>
          <DatePicker setDate={setDate} setLoading={setLoading}/>
        </ActionWrapper>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center", marginBottom:"2%", pointerEvents: moment(moment()).isAfter(moment(date).add(12, 'h')) ? 'none' : 'auto', opacity: moment(moment()).isAfter(moment(date).add(12, 'h')) ? "0.4" : "1"}}>
        {!loading ? bets == null ? <div/> : bets.bets.map((bet, i) => {
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
