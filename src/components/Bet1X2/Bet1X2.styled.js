import styled from 'styled-components';

export const StyledBet1X2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: grey;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      text-align: center;
      width: 30%;
      margin: auto;
      background-color: white;
      color: black;
      border: 1px solid white;
    }
  }

  span {
    text-align: center;
  }
`;
