import styled from 'styled-components/macro';

export const DetailSection = styled.div`
    display: flex;
    margin-top: 1vh;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const DetailSectionOne = styled.div`
    display: grid;
    grid-gap: 2rem;
    padding: 0 3rem;
    margin-bottom: 5rem;
    @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;
        padding: 0 4.5rem;
        grid-gap: 7rem;
        margin-bottom: 8rem;
    } ;
`;

export const DetailSectionOneContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
    }

    p {
        font-size: 1.3rem;
        margin-top: 36px;
        color: #333;
    }
    @media (max-width: 900px) {
        p {
            text-align: unset !important;
        }
    }
    :last-child() {
        text-align: right;
    }
`;

export const DetailSectionTwo = styled.div`
    display: flex;
    flex-direction: column-reverse;
    background: #e6e6e6;
    padding: 5rem 0;
    margin-bottom: 4rem;
    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 4rem;
        padding: 8rem 5rem;
    }
`;

export const DetailSectionTwoContent = styled.div`
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: 1.7rem;
    }

    img {
        height: 20rem;
    }
    @media (min-width: 900px) {
        h1 {
            font-size: 2.5rem;
        }
        &:first-child {
            text-align: left;
        }
        &:last-child {
            position: relative;
        }
        img {
            position: absolute;
            top: -12rem;
            height: 28rem;
        }
    }
`;
