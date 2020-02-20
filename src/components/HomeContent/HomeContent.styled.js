import styled from 'styled-components';

export const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .HomeContent-ButtonGroup {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    div {
      margin-top: 2%;
    }

    div:first-child {
      margin-top: 0;
    }
  }
`;
