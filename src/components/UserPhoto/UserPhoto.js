import React from 'react';
import { StyledUserPhoto } from './UserPhoto.styled';

const UserPhoto = props => {
  const { alt, size, src } = props;

  return (
    <StyledUserPhoto>
      <img
        className={size ? 'UserPhoto ' + size : 'UserPhoto'}
        src={src}
        alt={alt}
      />
    </StyledUserPhoto>
  );
};

export default UserPhoto;
