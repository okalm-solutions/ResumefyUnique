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
  padding-left: 128px;
  background-color: inherit;
`;

export const HeaderLogo = styled.div`
  ${FlexCenter}
  font-size: 20px;
  background-color: inherit;
  font-style: normal;
`;

export const LogoImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  background-color: inherit;
`;
