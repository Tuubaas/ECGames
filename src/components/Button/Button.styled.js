import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled.button.attrs(props => ({
  type: props.type
}))`
  :hover {
    background-color: 1px solid ${({theme}) => theme.primaryLight};
  }

  height: 38px;
  background-color: ${({theme}) => theme.primaryDark};
  border: none;
  border-radius: 5px;
  margin: 8px 16px;
  color: ${({theme}) => theme.primaryLight};
  font-size: 18px;
  text-align: center;
  cursor: pointer;
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
  cursor: pointer;
`;
