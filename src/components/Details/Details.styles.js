import styled from 'styled-components/macro';

export const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const DetailSectionOne = styled.div`
  display: flex;
  width: 100%;
  padding-left: 128px;
  height: 40%;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    text-align: center;
    min-height: 100%;
    padding-left: 0;
  }
`;

export const DetailSectionOneContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  @media screen and (max-width: 1150px) {
    margin-top: 0px;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;

    @media screen and (max-width: 1150px) {
      font-size: 22px;
      margin-top: 20px;
    }
  }

  p {
    font-size: 24px;
    margin-top: 36px;

    @media screen and (max-width: 1150px) {
      font-size: 22px;
    }
  }
  :last-child() {
    text-align: right;
  }
  @media screen and (max-width: 1150px) {
    margin-right: 0;
    padding: 0 32px;

    font-size: 22px;
  }
`;

export const DetailSectionTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 128px;
  height: 60%;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1150px) {
    flex-direction: column-reverse;
    min-height: 100%;
    min-width: 100%;
    padding: 0;
    text-align: center;
  }
`;

export const DetailSectionTwoContent = styled(DetailSectionOneContent)`
  width: 50%;
  position: relative;

  @media screen and (max-width: 1150px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  img {
    width: 323px;
    height: 415px;

    @media screen and (max-width: 1150px) {
      width: 300px;
      height: 300px;
      margin-bottom: 50px;
    }
  }
`;
