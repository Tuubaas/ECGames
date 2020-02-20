import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(false)}>
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Home
      </Link>
      <Link to="/dashboard" onClick={() => setOpen(false)}>
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Dashboard
      </Link>
      <Link to="/game" onClick={() => setOpen(false)}>
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Place bet
      </Link>
      <Link to="/leaderboards" onClick={() => setOpen(false)}>
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Leaderboards
      </Link>
      <Link to="/about" onClick={() => setOpen(false)}>
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Rules
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
