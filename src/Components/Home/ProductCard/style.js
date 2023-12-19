import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 15vw;
    border-radius: 30px;
`

export const Up = styled.div`
    border-radius: 10px;
    height: 60%;
    width: 100%;
    img {
        border-radius: 30px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: 0 0 10px purple;
    }
`

export const TitleContainer = styled.div`
    height: 30%;
    h1 {
        font-size: 15px;
        font-weight: 700;
        text-shadow: 0 0 30px purple;
    }
`

export const Down = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40%;
    p {
        font-weight: 300;
        font-size: medium;
    }
   
`

export const Button = styled.button`
    align-self: center;
    background-color: white;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    transition: 0.5s;
    height: 30px;
    cursor: pointer;
    &:hover{
        background-color: whitesmoke;
    }
`