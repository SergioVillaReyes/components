import styled from "styled-components";
import { MdClose } from "react-icons/md";
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const ModalWrapper = styled.div`
  /* width:500px;
  height:500px; */
  width: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  margin-top: 1rem;
`;
const ModalHeader = styled.div`
  padding: 2rem;
  border-bottom: 2px solid #dddd;
  width: 80%;
  text-align: center;
  h4 {
    margin-bottom: 0;
    margin-top: 0.5rem;
    line-height: 1.5;
    color: #f59d26;
    font-size: 1.5rem;
  }
`;

const ModalBody = styled.div`
  padding: 1rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  p {
    color: #5eabed;
    font-size: 1rem;
  }
  h4 {
    font-size: 2rem;
  }
`;
const ModalFooter = styled.div`
  padding: 1rem;
  display: flex;
`;

const ModalFooterButtonPrimary = styled.button`
  color: #fff;
  background-color: #5eabed;
  border: none;
  font-weight: bold;
  padding: 0.5rem 0.75rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-left: 1rem;
  border-radius: 8px;
  cursor: pointer;
`;

const ModalFooterButtonSecondary = styled.button`
  color: #5eabed;
  background-color: #fff;
  border: 1px solid transparent;
  border-color: #5eabed;
  padding: 0.5rem 0.75rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
`;
const IconCloseModalButton = styled(MdClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const CloseModalButton = styled.div`
  cursor: pointer;
`;

export {
  Background,
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalFooterButtonPrimary,
  ModalFooterButtonSecondary,
  IconCloseModalButton,
  CloseModalButton,
};