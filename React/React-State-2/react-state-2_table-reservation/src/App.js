import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  console.log(people);

  function handleAddPeople() {
    setPeople(people + 1);
  }
  function handleRemovePeople() {
    people > 0 ? setPeople(people - 1) : 0;
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        people={people}
        onIncrement={handleAddPeople}
        onDecrement={handleRemovePeople}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
