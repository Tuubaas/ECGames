import styled from 'styled-components';

export const StyledActionWrapper = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  z-index: 999;
`;
