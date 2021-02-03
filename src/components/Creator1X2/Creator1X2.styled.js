import styled from 'styled-components';

export const StyledCreator1X2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    display: flex;
    flex-direction: row;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;
