import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" />

      <ul className={styles.list}>
        <Link to="/home">Home</Link>
        <Link to="/#">Posta produto</Link>
      </ul>
    </header>
  );
}
