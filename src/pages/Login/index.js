import React from "react";

import { ButtonContainer } from "../../components/Button";

import styles from "./styles.module.scss";

export function Login() {
  return (
    <div className={styles.mainContainer}>
      <form method="post">
        <h1>Login</h1>

        <div className={styles.inputs}>
          <label>Email:</label>
          <input type="text" />
        </div>

        <div className={styles.inputs}>
          <label>Senha:</label>
          <input type="password" />
        </div>

        <ButtonContainer />
      </form>
    </div>
  );
}
