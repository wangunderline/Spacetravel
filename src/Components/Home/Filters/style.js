import styled from "styled-components";

export const Input = styled.input`
  margin-top: 10px;
  flex-direction: row;
  height: 20px;
  width: 20vw;
  padding: 1rem;
  border-radius: 10px;
  border-bottom: 5px solid purple;
  &:focus{
    background-color: antiquewhite;
  }
`;