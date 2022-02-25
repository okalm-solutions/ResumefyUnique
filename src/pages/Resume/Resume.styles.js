import styled, { css } from 'styled-components';

export const ResumeContainer = styled.div`
position: relative;
overflow-y: hidden;
height: calc(100vh - 8rem);
`

export const ButtonContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
position: absolute;
bottom: 0rem;
`

export const EducationButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: absolute;
  bottom: 10rem;
`;

export const BackButton = styled.button`
padding: 0.7rem 2.8rem;
color: white;
background-color: #6683E8;
border: none;
cursor: pointer;
`
export const NextButton = styled.button`
color: white;
padding: 0.7rem 2.8rem;
background-color: #86ECA3;
border: none;
cursor: pointer;
`