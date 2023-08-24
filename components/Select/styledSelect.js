import styled from 'styled-components';

const SelectContainer = styled.div`
    width: 100%;
    position: relative;
    font-size: 14px;
    margin: 18px 0px;
`;

const Label = styled.label`
    cursor: pointer;
`;

const SelectGroup = styled.div`
    border: 1px solid #9966FC;
    background-color: ${(props) => props.disabled ? '#e6e6e6' : 'white'};
    padding: 8px 5px;
    border-radius: 5px;
    margin-top: 5px;
    box-shadow: ${({ $isOpen }) => ($isOpen ? '0px 0px 3px #9966FC' : 'none')};
`;

const SelectHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 12px;
`;

const Icon = styled.span`
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url("/img/icons/up-arrow.png");
    background-size: contain;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
    transition: transform 0.3s ease-in-out;
    margin-left: 10px;
`;

const OptionsContainer = styled.div`
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    width: 99.7%;
    border: 1px solid #7A43E5;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: none;
    z-index: 1;
`;

const Option = styled.p`
  padding: 5px 0px;
  margin: 0;
  cursor: pointer;
  margin: 5px 10px;

  &:hover {
    background-color: #f0f0f0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgb(222, 222, 222);
  }
`;

const ErrorMesagge = styled.span`
    width: 100%;
    display: flex;
    padding: 3px 0px;
    color: red;
    font-size: 10px;
    z-index: 0;
`;

const HelpText = styled.span`
    color: #999999;
    font-size: 10px;
    z-index: 0;
    right: 0;
`;

export {
    SelectContainer,
    Label,
    SelectGroup,
    SelectHeader,
    Icon,
    OptionsContainer,
    Option,
    ErrorMesagge,
    HelpText,
}