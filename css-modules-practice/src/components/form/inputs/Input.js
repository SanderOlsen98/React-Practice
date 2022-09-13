import React from "react";
import Styles from "./Input.module.css";

function input(props) {
  return <input placeholder={props.placeholder} className={Styles.input} />;
}

export default input;
