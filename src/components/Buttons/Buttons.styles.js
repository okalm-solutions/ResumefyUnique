import styled, { css } from 'styled-components/macro';

const ButtonStyles = css`
    width: 279px;
    height: 81px;
    font-size: 24px;
    margin-top: 26px;
    cursor: pointer;
    @media (max-width: 1508px) {
        width: 11.5rem;
        height: 3rem;
        font-size: 1.2rem;
    }
`;

export const ButtonPrimary = styled.button`
    ${ButtonStyles}
    background-color: #6683E8;
    border: none;
    color: #fff;
`;

export const ButtonSecondary = styled.button`
    ${ButtonStyles}
    background-color: rgba(255, 255, 255, 0.6);
    border: 2px solid #6683e8;
    color: #000;
`;
