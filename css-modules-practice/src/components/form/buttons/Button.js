import React from "react";
import styles from "./Button.module.css";
import dangerStyles from "./Danger.module.css";

function Button(props) {
  let extraClass = null;

  console.log(props);

  if (props.variant == "danger") {
    extraClass = dangerStyles.danger;
  }

  return (
    <button className={`${styles.button} ${extraClass}`}>
      {props.children}
    </button>
  );
}

export default Button;
