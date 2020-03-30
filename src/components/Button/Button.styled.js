import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled.button`
  :hover {
    color: blue;
    border: 1px solid blue;
  }

  display: flex;
  height: ${({ main, signIn }) => (main ? '15%' : signIn ? '100%' : '30%')};
  width: 80%;
  color: black;
  background-color: ${({ main, signIn }) =>
    main || signIn ? 'white' : 'grey'};
  font-size: ${({ main }) => (main ? '28px' : '14px')};
  border: 1px solid black;
  text-align: center;
  border-radius: ${({ main }) => (main ? '20px' : '5px')};
  text-decoration: ${({ main }) => (main ? 'none' : 'initial')};
  margin: ${({ main }) => (main ? 'auto' : 'unset')};
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  :hover {
    color: blue;
    border: 1px solid blue;
  }

  display: flex;
  height: ${({ main }) => (main ? '15%' : '30%')};
  width: 80%;
  color: black;
  background-color: ${({ main }) => (main ? 'white' : 'grey')};
  font-size: ${({ main }) => (main ? '28px' : '14px')};
  border: 1px solid black;
  text-align: center;
  border-radius: ${({ main }) => (main ? '20px' : '5px')};
  text-decoration: ${({ main }) => (main ? 'none' : 'initial')};
  margin: ${({ main }) => (main ? 'auto' : 'unset')};
  justify-content: ${({ main }) => (main ? 'center' : 'unset')};
  align-items: ${({ main }) => (main ? 'center' : 'unset')};
`;
