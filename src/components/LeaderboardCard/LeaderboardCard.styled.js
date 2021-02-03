import styled from 'styled-components';

export const StyledLeaderboardCard = styled.div`
  //display:flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 0px 16px;

  .LeaderboardCard-Title {
    font-size: 18px;
  }

  .LeaderboardCard-List {
    display:flex;
    flex-direction: column;
  }
`;