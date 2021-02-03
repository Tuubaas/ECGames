import styled from 'styled-components';

export const StyledBetMultiChoice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: grey;
  margin-top: 5px;

  .BetMultiChoice-Wrapper {
    width: 100%;
    color: black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;

    div {
      margin: 2%;
      background-color: white;
      text-align: center;
    }
  }
`;
