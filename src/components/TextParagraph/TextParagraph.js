import React from 'react';
import { StyledTextParagraph } from './TextParagraph.styled';

const TextParagraph = ({ children }) => {
  return (
    <StyledTextParagraph className="TextParagraph">
      {children}
    </StyledTextParagraph>
  );
};

export default TextParagraph;
