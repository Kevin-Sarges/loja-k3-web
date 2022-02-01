import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import { AuthContext } from "../../context/auth";
import Logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

export function Header() {
  const { logout } = useContext(AuthContext);

  return (
    <header className={styles.headerComponent}>
      <img src={Logo} alt="Logo" />

      <ul className={styles.list}>
        <Link to="/">Home</Link>
        <Link to="/posta-produto">Posta produto</Link>
        <Link to="#" onClick={logout}>
          Sair <FiLogOut style={{ alignItems: "center" }} />
        </Link>
      </ul>
    </header>
  );
}
