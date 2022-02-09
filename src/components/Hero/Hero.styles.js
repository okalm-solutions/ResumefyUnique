import styled from 'styled-components';

export const HeroSection = styled.div`
  display: flex;
  padding-left: 128px;
  width: 100%;
  height: 100%;
`;

export const HeroDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  min-height: 100%;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 58px;
  }
  p {
    width: 559px;
    margin-top: 26px;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const HeroImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  position: relative;
`;

export const HeroImage = styled.img`
  position: absolute;
  right: -35px;
`;
