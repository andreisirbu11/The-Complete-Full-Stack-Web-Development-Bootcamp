import React from "react";
import { useState } from "react";

function App() {
  const [button, setButton] = useState(false);
  const [time, setTime] = useState(null);

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="container">
      <h1>{button === true && time}</h1>
      <button onClick={() => setButton(true)}>Get Time</button>
    </div>
  );
}

export default App;
