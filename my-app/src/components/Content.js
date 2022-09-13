import React from "react";

function Content(props) {
  console.log(props);
  return <p>{props.content}</p>;
}

export default Content;
