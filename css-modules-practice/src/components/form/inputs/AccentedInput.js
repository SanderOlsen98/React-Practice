import React from "react";
import Styles from "./AccentedInput.module.css";

function AccentedInput(props) {
  return <input placeholder={props.placeholder} className={Styles.accented} />;
}

export default AccentedInput;
