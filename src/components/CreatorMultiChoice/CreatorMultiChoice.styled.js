import styled from 'styled-components';

export const StyledCreatorMultiChoice = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
