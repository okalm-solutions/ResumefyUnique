import styled from 'styled-components';

export const Header = styled.h1`
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media (min-width: 800px) {
        font-size: 3.4rem;
    }
`;
export const FormContainer = styled.div`
    display: flex;
    width: 60%;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px) {
        width: 100%;
        height: calc(100vh - 16rem);
        overflow-y: auto;
        flex-direction: column;
        margin-bottom: 2rem;
    }
`;
