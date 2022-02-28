import styled from 'styled-components';

export const ProfileSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1200px;
    height: 70vh;
    margin: 0 auto;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const ProfileFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 50vh;
    justify-content: center;
    @media (min-width: 990px) {
        max-width: 60%;
        align-item: center;
    }
`;
export const ProfileForm = styled.form`
    display: flex;
    width: 18rem;

    flex-direction: column;
`;
export const Heading = styled.h1`
    font-size: 2rem;
    margin-top: 2rem;
    @media (min-width: 800px) {
        font-size: 3.4rem;
    }
`;
export const FormInput = styled.input`
    margin-bottom: 1rem;
    margin-top: 0.1rem;
    padding: 0.2rem;
    border: 1.4px solid gray;
`;
