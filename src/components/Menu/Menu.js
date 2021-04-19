import { bool } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen, user }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(false)} style={{zIndex:"11"}}>
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Home
      </Link>
      <Link to="/dashboard" onClick={() => setOpen(false)} style={{zIndex:"10"}}>
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Dashboard
      </Link>
      <Link to="/game" onClick={() => setOpen(false)} style={{zIndex:"9"}}>
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Place bet
      </Link>
      <Link to="/leagues" onClick={() => setOpen(false)} style={{zIndex:"8"}}>
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Leagues
      </Link>
      <div className="Menu-Separator"/>
      <Link to="/about" onClick={() => setOpen(false)} style={{zIndex:"7"}}>
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Rules
      </Link>
      {user ? 
        user.admin ? 
          <Link to="/admin" onClick={() => setOpen(false)} style={{zIndex:"6"}}>
            <span role="img" aria-label="admin">
              &#x1f4e9;
            </span>
            Admin
          </Link> : <React.Fragment/> : <React.Fragment/>}
      <div className="Menu-Fill" />
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
