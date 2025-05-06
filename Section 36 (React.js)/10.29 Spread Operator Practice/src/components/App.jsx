import React from "react";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  function handleClick() {
    setItems((prevValue) => {
      return [...prevValue, input];
    });
  }

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
