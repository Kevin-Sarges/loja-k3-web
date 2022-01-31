import React, { useContext } from "react";

import { Button } from "../../components/Button";
import { AuthContext } from "../../context/auth";

import styles from "./styles.module.scss";

export function Login() {
  const { handleChange, handleLogin } = useContext(AuthContext);

  return (
    <div className={styles.mainContainer}>
      <form className={styles.form} method="post">
        <h1>Login</h1>

        <div className={styles.inputs}>
          <label>Email:</label>
          <input type="text" name="email" onChange={handleChange} />
        </div>

        <div className={styles.inputs}>
          <label>Senha:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>

        <Button text="Entrar" onClick={handleLogin} />
      </form>
    </div>
  );
}
