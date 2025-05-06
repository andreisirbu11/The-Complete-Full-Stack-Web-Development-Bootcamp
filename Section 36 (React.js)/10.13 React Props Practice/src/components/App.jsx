import React from "react";
import contacts from "../contacts";
import Card from "./Card.jsx";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        src={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      ></Card>
      <Card
        name={contacts[1].name}
        src={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      ></Card>
      <Card
        name={contacts[2].name}
        src={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      ></Card>
    </div>
  );
}

export default App;
