import React from 'react';
import { StyledActionWrapper } from './ActionWrapper.styled.js';

const ActionWrapper = ({ show, children }) => {
  return <StyledActionWrapper show={show}>{children}</StyledActionWrapper>;
};

export default ActionWrapper;
