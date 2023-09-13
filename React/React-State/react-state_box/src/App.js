import "./styles.css";
import { useState } from "react";

export default function App() {
  let [isActive, setActive] = useState(false);

  function handleClick() {
    isActive = setActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}
