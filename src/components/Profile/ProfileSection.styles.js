import styled, { css } from 'styled-components';

export const ProfileSectionContainer = styled.div`
display: flex;
justify-content: center;
max-width: 1200px;
margin: 0 auto; 
width: 100%;
flex-direction: column;
align-items: center;
`

export const ProfileFormContainer = styled.div`
display: flex;
flex-direction: column;
width: 70%;
height: 50vh;
position: relative;
justify-content: center;
@media (min-width: 990px){
max-width: 60%;
}
`
export const ProfileForm = styled.form`
display: flex;
flex-direction: column;


`
export const Heading = styled.h1`
font-size: 2rem;
margin-top: 2rem;
@media (min-width: 800px){
    font-size: 3.4rem;
}
`

export const ButtonContainer = styled.div`
position: absolute;
bottom: 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
`

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

export const FormInput = styled.input`
margin-bottom: 1rem;
margin-top: 0.1rem;
padding: 0.2rem;
border: 1.4px solid gray;
`

