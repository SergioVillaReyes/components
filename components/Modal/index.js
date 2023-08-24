"use client";
import React, { useRef } from "react";
import {
  Background,
  CloseModalButton,
  IconCloseModalButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalFooterButtonPrimary,
  ModalFooterButtonSecondary,
  ModalHeader,
  ModalWrapper,
} from "./styledModal";

const Modal = ({
  showModal,
  setShowModal,
  title,
  children,
  otherClass = "",
  textSecondary = "regresar",
  textPrimary = "",
  callBack,
}) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <ModalContent className={otherClass}>
              {title && (
                <ModalHeader>
                  <h4>{title}</h4>
                </ModalHeader>
              )}
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <ModalFooterButtonSecondary
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  {textSecondary}
                </ModalFooterButtonSecondary>
                <ModalFooterButtonPrimary>
                  {textPrimary}
                </ModalFooterButtonPrimary>
              </ModalFooter>
            </ModalContent>
            <CloseModalButton onClick={() => setShowModal((prev) => !prev)}>
              <IconCloseModalButton></IconCloseModalButton>
            </CloseModalButton>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;