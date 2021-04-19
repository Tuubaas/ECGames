import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //background: ${({ theme }) => theme.secondaryGreen};
  height: 100vh;
  text-align: left;
  padding-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 9;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  .Menu-Separator {
    height: 10%;
    background-color: ${({theme}) => theme.secondaryGreen};
    box-shadow: inset 0px 3px 3px lightgrey;
  }

  .Menu-Fill {
    flex: 1;
    background-color: ${({theme}) => theme.secondaryGreen};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    background-color: ${({theme}) => theme.primaryLight};
    box-shadow: inset 0px 3px 3px lightgrey;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
