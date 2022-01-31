import React, { useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "../../components/Button";

import api from "../../services/api";
import styles from "./styles.module.scss";

export function Login() {
  const navigete = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = formData;

    await api
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        if (!response.data.message) {
          navigete("/home");
        } else {
          alert("Email ou Senha incorretas !!");
          navigete("/");
        }
      });
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.form} method="post">
        <h1>Login</h1>

        <div className={styles.inputs}>
          <label>Email:</label>
          <input type="text" name="email" onChange={handleChange} />
        </div>

        <div className={styles.inputs}>
          <label>Senha:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>

        <Button text="Entrar" onClick={handleSubmit} />
      </div>
    </div>
  );
}
