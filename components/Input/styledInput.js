import styled from "styled-components";

const InputStyled = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  font-family: "Inter";
  color: #9966FC;
  font-size: 1em;
  border: 2px solid #9966FC;
  border-radius: 3px;
  background-color: #fff;
  
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

export { InputStyled };
