import styled from 'styled-components'

export const StyledLeaderboardItem = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid;
  width: 100%;
  justify-content: space-between;
  background-color: ${props => props.index ? "#BABABA" : "#EFEFEF"};


  span {

  }

  #LeaderboardItem-Pos {
    text-align: center;
    width: 5%;
    border-right: 1px solid;
  }

  #LeaderboardItem-Name {
    width: 100%;
    text-align: left;
    margin-left: 5%;
  }

  #LeaderboardItem-Bal {
    width: 100%;
    text-align: right;
    margin-right: 5%;
  }
`