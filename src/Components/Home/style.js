import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const PresentationContainer = styled.div`
  display: flex;
  height: 90vh;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 20px;
  h1 {
    align-self: center;
    font-weight: 500;
    scale: 1.2;
    opacity: 2;
    position: absolute;
    font-family: "Nasalization";
    text-shadow: 0 0 15px purple;
    border-bottom: 5px solid purple;
    top: 45%;
  }

  h2 {
    font-weight: 700;
    scale: 1.2;
    opacity: 2;
    position: absolute;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 0 0 15px purple;
    color: purple;
    top: 53%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }

  img {
   object-fit: cover;
   height: 80%;
   border-radius: 30px;
   position: absolute;
}
`

export const SelectContainter = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    margin-top: 1vh;
    margin-bottom: 5vh;
    border: none;
    height: 10vh;
    width: 70vw;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    select {
      border-radius: 10px;
      height: 5.5vh;
      width: 6vw;
      margin-top: 7px;
    }
`