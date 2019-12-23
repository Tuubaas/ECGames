import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = props => {
  const { children, className, onClick, link } = props;

  return link ? (
    <Link
      to={link}
      className={className ? 'Button ' + className : 'Button Button-Standard'}
    >
      {children}
    </Link>
  ) : (
    <div
      className={className ? 'Button ' + className : 'Button Button-Standard'}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
