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
  text-decoration: none;
  line-height: 38px;
`;
