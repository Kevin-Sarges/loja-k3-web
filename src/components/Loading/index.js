import React from "react";

import styles from "./styles.module.scss";

export function Loading() {
  return (
    <div className={styles.loading}>
      <div>
        <div className={styles.load} id={styles.div01}></div>
        <div className={styles.load} id={styles.div02}></div>
        <div className={styles.load} id={styles.div03}></div>
      </div>

      <p>Carregando...</p>
    </div>
  );
}
