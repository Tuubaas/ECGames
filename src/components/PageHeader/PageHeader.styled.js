import styled from 'styled-components';

export const StyledPageHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.primaryGreen};;
  height: 10%;

  .PageHeader-Escape {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    font-size: 36px;
    font-weight: 800;
    justify-content: center;
    align-items: center;
  }

  .PageHeader-Logo {
    /*height: 100px;
    width: 100px;*/
    z-index: 1000;
  }

  .PageHeader-Menu {
    display: flex;
    align-items: center;
    width: 0;
    
  }
`;
