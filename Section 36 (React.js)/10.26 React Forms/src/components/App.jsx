import React from "react";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [headingText, setHeadingText] = useState("");

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form
        onSubmit={(event) => {
          setHeadingText(input);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="What's your name?"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          value={input}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
