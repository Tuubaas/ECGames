import styled from 'styled-components';

export const StyledBetMultiChoice = styled.div`
  width: 50%;
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
      text-align: center;
      cursor: pointer;
      border: 1px solid white;
    }

    .BetMultiChoice-Button {
      background-color: white;
    }

    .BetMultiChoice-Button-Active {
      background-color: grey;
    }
  }
`;
