import "./styles.module.scss";
import React from "react";

export function Button(props) {
  return (
    <button type="submit" {...props}>
      <p>{props.text}</p>
    </button>
  );
}
