import styled from "styled-components";

export const HeroSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 109vh;
    @media (min-width: 1500px) {
        height: 100vh;
        flex-direction: row;
        div {
            flex-basis: 50%;
            text-align: unset;
        }
    }
    @media (max-width: 900px) {
        height: 79vh;
    }
`;

export const HeroDetails = styled.div`
    text-align: center;
    padding: 0 1rem;
    margin-bottom: 6%;
    @media (min-width: 800px) and (max-width: 1500px) {
        h1 {
            font-size: 3rem;
        }
    }
    @media (min-width: 1500px) {
        padding-left: 6rem;
        h1 {
            font-size: 4rem;
        }
    }
`;

export const HeroImageContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

export const HeroImage = styled.img`
    margin: 0 auto;
    height: 30rem;
    @media (max-width: 900px) {
        height: 13rem;
    }
`;
