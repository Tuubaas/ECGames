import styled from 'styled-components';

export const StyledBetMultiChoice = styled.div`
  width: 90%;
  //height: 96px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.secondaryGreen};
  border-radius: 10px;
  padding: 0px 3%;
  margin-bottom: 12px;

  .BetMultiChoice-Wrapper {
    width: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      text-align: center;
      width: 100%;
      height: 36px;
      color: black;
      border-bottom: 1px solid grey;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      span {
        font-weight: 600;
      }
    }


    div:last-child {
      border-bottom: none;
    }

    .BetMultiChoice-Button {
      background-color: ${({theme}) => theme.secondaryGreen};
    }

    .BetMultiChoice-Button-Active {
      background-color: ${({theme}) => theme.teriaryGreen};
    }

        .BetMultiChoice-Button:hover {
      background-color: ${({theme}) => theme.teriaryGreen};
    }
  }

  #BetMultiChoice-Title {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid grey;
  }
`;
