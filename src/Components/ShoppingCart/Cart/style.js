import styled from "styled-components";

export const ContainerCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0%;
    max-height: 100vh;
    border-radius: 10px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    h1 {
        color: black;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 25px;
    }
`

export const CartDetail = styled.div`
    display: flex;
    width: 30vw;
    height: 4.3vh;
    justify-content: center;
    background-color: purple;
    border-radius: 5px;
    box-shadow: 0 0 30px black;
    h1 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: white;
        font-weight: 200;
    }
    transition: 1s;

    &:hover {
        scale: 1.1
    }
`

export const CartBox = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 30px;
    color: purple;
    height: 70vh;
    width: 50vw;
    max-height: 100vh;
    button {
        cursor: pointer
    }
    p {
        color: white;
        font-weight: 300;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        width: 100%
    }
`
export const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 15px;
    img {
        height: 80px;
        width: 100%;
        border-radius: 10px;
    }
`

export const ProductInfo = styled.div`
    width: 80px;
    h1 {
        color: white
    }
    button {
        border: none;
        border-radius: 5px;

    }
`

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    flex-direction: row;
    h1 {
        color: white
    }
    width: 45vw;
`

export const CloseButton = styled.button`
    align-self: flex-end;
    justify-self: center;
    background-color: red;
    width: 100%;
    border: none;
    height: 30px;
    border-radius: 10px;
`

export const CleanButton = styled.button`
    align-self: flex-end;
    justify-self: center;
    width: 100%;
    border: none;
    height: 30px;
    border-radius: 10px;
    margin-right: 5px;
    &:hover {
        background-color: white;
    }
`

export const OrderContainer = styled.div`
    display: flex;
    grid-column: 1/3;
    grid-row: 1/3;
    align-items: center;
    justify-content: center;
`

export const OrderButton = styled.button`
    grid-column: 1/3;
    grid-row: 1/3;
    margin-bottom: 5px;
    align-self: flex-end;
    justify-self: center;
    width: 100%;
    border: none;
    background-color: green;
    height: 30px;
    border-radius: 10px;
    margin-right: 5px;
    &:hover {
        background-color: white;
    }
`

export const CheckIcon = styled.img`
    height: 30px;
    width: 30px;
    animation: none;
`

export const Total = styled.p`
    border: 1px solid white;
    height: 4vh;
    align-self: flex-end;
`

