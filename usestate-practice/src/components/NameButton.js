import { useState } from "react";

function NameButton() {
  const [name, setName] = useState("Mari");

  function handleClick() {
    setName("Jon");
  }

  return <button onClick={handleClick}>{name}</button>;
}

export default NameButton;

// // declare a new state variable called "count"
// // setCount is a function that allows us to update the count state variable
// const [count, setCount] = useState(0);

// // return an button named "clicked x times" with setcount +1 on clicked
// return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
