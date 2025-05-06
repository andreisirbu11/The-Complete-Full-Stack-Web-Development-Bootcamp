import React from "react";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case "fName":
        setFullName((prevValue) => {
          return {
            fName: value,
            lName: prevValue.lName,
          };
        });
        break;
      case "lName":
        setFullName((prevValue) => {
          return {
            fName: prevValue.fName,
            lName: value,
          };
        });
        break;
      default:
        console.log("Other input was changed");
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
