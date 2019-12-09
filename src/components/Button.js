import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = props => {
  const { children, className, onClick, link } = props;
  return link ? (
    <Link className={className ? className : 'Button'} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <div className={className ? className : 'Button'} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
