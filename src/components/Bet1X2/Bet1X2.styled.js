import styled from 'styled-components';

export const StyledBet1X2 = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  background-color: grey;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      text-align: center;
      width: 30%;
      margin: 2%;
      color: black;
      border: 1px solid white;
      cursor: pointer;
    }

    .Bet1X2-Button-Active {
      background-color: grey;
    }

    .Bet1X2-Button {
      background-color: white;
    }
  }

  span {
    text-align: center;
  }
`;
