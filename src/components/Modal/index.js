import React, { useContext } from "react";
import ModalContainer from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

import { AuthContext } from "../../context/auth";
import { Form } from "../Form";

import styles from "./styles.module.scss";

export function Modal(props) {
  const { handleUpdated } = useContext(AuthContext);

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
      {...props}
    >
      <AiOutlineClose onClick={props.closeModal} id={styles.close} />
      <Form submit={handleUpdated} />
    </ModalContainer>
  );
}
