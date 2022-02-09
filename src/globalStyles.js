import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {    
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: '#fff';
       
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
    }
 
`;

export default GlobalStyles;
