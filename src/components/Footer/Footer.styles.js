import styled from 'styled-components';

export const FooterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  padding-left: 2rem;
  padding-right: 2rem;
  bottom: 0;
  height: 4rem;
  
`;

export const FooterDetails = styled.div`
  font-size: 1.1rem;
  line-height: 42px;
  @media (min-width: 700px){
      font-size: 1.6rem;
  }
`;

export const FooterImage = styled.img`
width: 1rem;
margin-left: 0.5rem;
@media (min-width: 700px){
    width: 1.4rem;
}
`
