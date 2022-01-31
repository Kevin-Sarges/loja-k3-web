import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/auth";
import Logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

export function Header() {
  const { logout } = useContext(AuthContext);

  return (
    <header className={styles.headerComponent}>
      <img src={Logo} alt="Logo" />

      <ul className={styles.list}>
        <Link to="/home">Home</Link>
        <Link to="/posta-produto">Posta produto</Link>
        <button onClick={logout}>Sair</button>
      </ul>
    </header>
  );
}
