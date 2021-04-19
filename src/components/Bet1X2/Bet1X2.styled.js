import styled from 'styled-components';

export const StyledBet1X2 = styled.div`
  width: 90%;
  height: 96px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.secondaryGreen};
  border-radius: 10px;
  padding: 0px 3%;
  margin-bottom: 12px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      text-align: center;
      width: 100%;
      height: 100%;
      color: black;
      border-right: 1px solid grey;
      cursor: pointer;
      flex-direction: column;

      span {
        font-weight: 600;
      }
    }
    div:last-child {
      border-right: none;
    }

    .Bet1X2-Button-Active {
      background-color: ${({theme}) => theme.teriaryGreen};
    }

    .Bet1X2-Button {
      background-color: ${({theme}) => theme.secondaryGreen};
    }

    .Bet1X2-Button:hover {
      background-color: ${({theme}) => theme.teriaryGreen}
    }
  }

  #Bet1X2-Title {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid grey;
  }
`;
