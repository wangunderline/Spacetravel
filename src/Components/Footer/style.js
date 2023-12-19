import styled from "styled-components";

export const FooterStyle = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 100%; 
    height: 50vh;
    z-index: 1000;
    h1 {
        margin-left: 20px; 
        color: white;
        font-family: 'Nasalization';
        font-weight: 800;
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 80%;
    border-bottom: 1px solid grey;
    li {
        color: white;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: large;
        list-style: none;
        font-weight: 200;
    &:hover{
        cursor: pointer;
    }
    }
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    height: 70%;
    h1 {
        margin-top: 60px;
    }
`