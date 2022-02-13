import styled from "styled-components";


export const Header = styled.h1`
font-size: 2rem;
margin-top: 2rem;
@media (min-width: 800px){
    font-size: 3.4rem;
}
`
export const FormContainer =styled.div`
display: flex;
width: 60%;
align-items: center;
jutify-content: space-between;
@media (max-width: 1000px){
    justify-content: unset;
    width: 100%;
    flex-direction: column;
}
`