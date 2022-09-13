import React from "react";
import Styles from "./FormHeading.module.css";

function FormHeading(props) {
  return <h3 className={Styles.heading}>{props.children}</h3>;
}

export default FormHeading;
