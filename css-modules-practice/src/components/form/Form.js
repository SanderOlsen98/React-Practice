import React from "react";
import Styles from "./Form.module.css";

function Form(props) {
  return <form className={Styles.form}>{props.children}</form>;
}

export default Form;
