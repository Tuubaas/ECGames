import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  display: flex;
  flex-direction: column;

  div {
    height: fit-content;
    width: 100px;
    border: 1px solid black;
    background-color: white;
    color: black;
  }

  div:hover {
    background-color: grey;
  }
`;
