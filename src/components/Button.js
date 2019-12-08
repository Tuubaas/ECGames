import React from 'react';
import './Button.css';

const Button = props => {
  const { children, className, onClick } = props;
  return (
    <div className={className ? className : 'Button'} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
