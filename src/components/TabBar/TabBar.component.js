import React from 'react';
import { Link } from 'react-router-dom';
import './TabBar.css';

const TabBarComponent = props => {
  const { items } = props;
  return (
    <div className="TabBar">
      {items.map((item, i) => (
        <Link
          key={i}
          className="TabBar-Tab"
          to={`/odds-em/${item.text.toLowerCase()}`}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default TabBarComponent;
