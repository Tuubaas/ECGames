import React from 'react';
import './UserPhoto.css';

const UserPhoto = props => {
  const { alt, className, src } = props;

  return <img className={'UserPhoto ' + className} src={src} alt={alt} />;
};

export default UserPhoto;
