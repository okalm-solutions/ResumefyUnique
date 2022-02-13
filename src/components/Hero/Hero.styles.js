import styled from 'styled-components';

export const HeroSection = styled.div`
  display: flex;
  padding-left: 128px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    padding: 0 32px;
  }
`;

export const HeroDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  min-height: 100%;

  @media screen and (max-width: 1150px) {
    width: 100%;
    align-items: center;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 58px;

    @media screen and (max-width: 1150px) {
      font-size: 26px;
      text-align: center;
    }
  }
  p {
    width: 559px;
    margin-top: 26px;
    font-size: 24px;
    line-height: 28px;

    @media screen and (max-width: 1150px) {
      font-size: 16px;
      padding: 0 32px;
      width: 100%;
      line-height: 20px;
      text-align: center;
    }
  }
`;

export const HeroImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  position: relative;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  right: -35px;
`;

export const HeroImgeFullContainer = styled.div`
  display: none;
  @media screen and (max-width: 1150px) {
    display: block;
    margin-top: 117px;
  }
`;

export const HeroImageFull = styled.img`
  width: 100%;
`;
