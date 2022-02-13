import styled, { css } from 'styled-components/macro';

const ButtonStyles = css`
  width: 233px;
  height: 53px;
  font-size: 24px;
  margin-top: 26px;
  cursor: pointer;

  @media screen and (max-width: 1150px) {
    font-size: 12px;
    width: 149px;
    height: 39px;
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
