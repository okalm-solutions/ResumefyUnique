import styled, { css } from 'styled-components';

const FlexCenterSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  ${FlexCenterSpaceBetween}
  height: 70px;
  padding: 2rem;
  background-color: inherit;
`;

export const HeaderLogo = styled.div`
  ${FlexCenter}
  font-size: 20px;
  background-color: inherit;
  font-style: normal;
`;

export const LogoImage = styled.img`
  width: 18px;
  height: 19px;
  margin-right: 5px;
  background-color: inherit;
`;

export const LogoText = styled.h3`
  text-decoration: none !important;
`;

export const MenuIcon = styled.img`
  width: 18px;
  height: 12px;

  display: none;

  @media screen and (max-width: 1150px) {
    display: block;
  }
`;
