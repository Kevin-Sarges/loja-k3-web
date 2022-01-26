import React from "react";

import styles from "./styles.module.scss";

export function Button(props) {
  return (
    <button style={styles.button} type="submit">
      <p>{props.text}</p>
    </button>
  );
}
