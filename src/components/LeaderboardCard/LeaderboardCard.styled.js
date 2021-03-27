import styled from 'styled-components';

export const StyledLeaderboardCard = styled.div`
  border-radius: 10px;
  width: 90%;
  height: 10%;
  display:flex;
  flex-direction: column;
  padding: 0px 8px;
  background-color: ${({theme}) => theme.teriaryGreen};
  font-size: 18px;

  .LeaderboardCard-Title {
    padding: 8px 0px;
    font-size: 18px;
    border-bottom: 1px solid grey;
  }

  .LeaderboardCard-Info {
    padding: 8px;
    display:flex;
    flex-direction: row;
  }
  .LeaderboardCard-IconText {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
`;