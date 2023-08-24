import styled, { css } from "styled-components";

const ContainerSearch = styled.div`
  border: 1px solid #9966fc;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out; /* Agrega una transición suave al cambio de color */
  &:focus-within {
    box-shadow: 0px 0px 0px .2rem rgba(122,67,229,0.25);

  }
`;
const StyledForm = styled.form`
    display: flex;
    position: relative;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  display: flex;
  padding: 0rem;
  align-items: center;
  background: #fafafa 0% 0% no-repeat padding-box;
  cursor: pointer;
`;



const StyledInput = styled.input`
width: 100%;
  padding: 0.5rem 0.5rem;
  font-size: 20px;
  background: #fafafa 0% 0% no-repeat padding-box;
  border:none;
  border-radius: 4px;
  outline: none;

`;

const StyledIcon = styled.img`
  position: relative;
  margin: 10px;
  border-top-right-radius: 4px;
`;

const StyledHelpText = styled.small`
  position: absolute;
  top: 45px;
  left: 3px;
  color: ${props => props.errorHelpText ? "#e41c24" : "#707070"};
`;

export { ContainerSearch, StyledInput, StyledIcon, StyledForm, StyledButton, StyledHelpText };