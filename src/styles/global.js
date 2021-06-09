import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0; 
        padding:0;
        box-sizing:border-box;
        outline:0;
    }

    :root{
        --white:#fff;
        --blue: #BBD4CE;
        --black: #020202 83%;
        --pink: #C75470;
        --green:#2ECC71;
        --pinkRemove: #CB5377;
        --blueBlack: #240052;
        --blueSelect: #0079E0 80%;
    }

    body{
        background-color: var(--blue);
        color: var(--blue)
    }

    body, input, button{
        font-family:'PT Serif', serif;
        font-size:1rem;
    }

    h1,h2,h3,h4,h5,h6, span{
        font-family:'Roboto Mono'; 
        font-weight:600;
        font-size: 2rem;
        color: var(--blueBlack);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    }

    hr{
        color: var(--pink)
    }

    button{
        cursor:pointer;
        border-style: none;
    }

    a{
        text-decoration:none;
    }
`;
