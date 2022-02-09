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
`;

export const DetailSectionOneContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
  }

  p {
    font-size: 24px;
    margin-top: 36px;
  }
  :last-child() {
    text-align: right;
  }
`;

export const DetailSectionTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 128px;
  height: 60%;
  background: #e6e6e6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DetailSectionTwoContent = styled(DetailSectionOneContent)`
  display: flex;
  flex-direction: column;
  width: 50%;

  img {
    width: 323px;
    height: 415px;
  }
`;
