import React from 'react';
import Button from './Button';
import UserPhoto from './UserPhoto';
import './PageHeader.css';

const PageHeader = props => {
  const { buttonText, imageAlt, imageSrc, logo, name, userAction } = props;

  return (
    <div className="PageHeader">
      <div className="PageHeader-Escape">
        <div className="PageHeader-logo">{logo}</div>
        <span>ODDS-EM</span>
      </div>
      <div className="PageHeader-User">
        <UserPhoto src={imageSrc} alt={imageAlt} className="UserPhoto-M" />
        <span className="PageHeader-userText">{name ? name : 'Sign in'}</span>
        <Button onClick={userAction}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default PageHeader;
