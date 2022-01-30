import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "../../components/Button";

import api from "../../services/api";
import styles from "./styles.module.scss";

export function Login() {
  const navigete = useNavigate();

  const [auth, setAuth] = useState(false);
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

    const data = new FormData();

    data.append("email", email);
    data.append("password", password);

    const {
      data: { token },
    } = await api.post("/login", data);

    localStorage.setItem("token", JSON.stringify(token));
    api.defaults.headers.Authorizatetion = `Bearer ${token}`;
    navigete("/home");
    setAuth(true);
  }

  return (
    <div className={styles.mainContainer}>
      <form method="post">
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
      </form>
    </div>
  );
}
