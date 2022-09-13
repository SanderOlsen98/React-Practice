import React from "react";
import Styles from "./PageHeading.module.css";

function PageHeading(props) {
  return <h2 className={Styles.heading}>{props.children}</h2>;
}

export default PageHeading;
