import React from "react";
import styles from "./styles.module.scss";

export function Button(props) {
  return (
    <button className={styles.button} type="submit" {...props}>
      <p>{props.text}</p>
    </button>
  );
}
