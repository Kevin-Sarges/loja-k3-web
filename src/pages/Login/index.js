import React from "react";

import { Button } from "../../components/Button";

import styles from "./styles.module.scss";

export function Login() {
  return (
    <div className={styles.mainContainer}>
      <form>
        <h1>Login</h1>

        <div className={styles.inputs}>
          <label>Email:</label>
          <input type="text" />
        </div>

        <div className={styles.inputs}>
          <label>Senha:</label>
          <input type="password" />
        </div>

        <Button text="Entrar" />
      </form>
    </div>
  );
}
