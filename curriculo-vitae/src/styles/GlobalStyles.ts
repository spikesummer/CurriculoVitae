import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        list-style-type: none;
    }

    html, body{
        background: lightblue;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    input, button{
        border: 0;
        outline: none;
    }
`;