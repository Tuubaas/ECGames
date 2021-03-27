import styled from 'styled-components';

export const StyledBioContent = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 24px 48px 24px 48px;
    border-right: 1px solid #0D0C1D;
    //justify-content: center;
    align-items: center;

    @media (max-width: 786px){
        border-right: none;
    }


    .StyledBio-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 48px;
    }

    .StyledBio-text {
        font-size: 18px;
        color: #0D0C1D;
        margin: auto;
    }

    .StyledBio-bal {
        font-weight: 600;
    }
`;