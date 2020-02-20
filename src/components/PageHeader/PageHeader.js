import React from 'react';
import { Burger } from '../index';
import { StyledPageHeader } from './PageHeader.styled';

const PageHeader = props => {
  const { logo, open, setOpen } = props;

  return (
    <StyledPageHeader className="PageHeader">
      <div className="PageHeader-Menu">
        <Burger open={open} setOpen={setOpen}></Burger>
      </div>
      <div className="PageHeader-Escape">
        <div className="PageHeader-logo">{logo}</div>
        <span>ODDS-EM</span>
      </div>
    </StyledPageHeader>
  );
};

export default PageHeader;
