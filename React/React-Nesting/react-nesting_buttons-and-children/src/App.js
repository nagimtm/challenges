import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click Me</Button>
      <Button>Next Button</Button>
      <Button>Previous Button</Button>
      <Button>Go Down</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
