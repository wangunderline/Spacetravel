// style.js (estilização de header):

import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #212422;
    width: 100%; 
    height: 6vh;
    z-index: 1000;
    h1 {
        margin-left: 20px; 
        color: white;
        align-self: center;
        font-family: 'Nasalization';
        font-weight: 300;
        text-shadow: 0 0 15px purple;
    }
`;

export const Rocket = styled.img`
        height: 40px;
        width: 40px;
        background-color: black;
        border-radius: 8px;
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
`

export const Search = styled.input`
    border: none;
    padding: 10px;
    margin-right: 10px;
    width: 20vw;
`