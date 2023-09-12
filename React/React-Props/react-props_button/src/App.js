import React from "react";
import "./styles.css";
import { Button } from "./component/Button";

export default function App() {
  const handleClick = () => {
    console.log("You clicked me!");
  };
  return (
    <Button
      text="Click Me"
      color="orange"
      onClick={handleClick}
      disabled={false}
    />
  );
}
