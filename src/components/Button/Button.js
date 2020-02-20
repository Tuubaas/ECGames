import React from 'react';
import { StyledButton, StyledLink } from './Button.styled';

const Button = ({ main, onClick, link, children, signIn }) => {
  return link ? (
    <StyledLink to={link} main={main}>
      {children}
    </StyledLink>
  ) : (
    <StyledButton main={main} onClick={onClick} signIn={signIn}>
      {children}
    </StyledButton>
  );
};

export default Button;
