import styled from 'styled-components';

export const StyledDashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .DashboardContent-group {
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;