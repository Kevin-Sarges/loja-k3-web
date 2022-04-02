import React from "react";
import ModalContainer from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

import { Form } from "../Form";
import styles from "./styles.module.scss";

export function Modal(props) {
  return (
    <ModalContainer
      isOpen={props.openModal}
      onRequestClose={props.closeModal}
      className={styles.modalContainer}
      style={{
        overlay: {
          background: "none",
        },
      }}
    >
      <AiOutlineClose onClick={props.closeModal} id={styles.close} />
      <Form />
    </ModalContainer>
  );
}
