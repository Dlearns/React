import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <div>
        <label>First Name: </label>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div>
        <label>Last Name: </label>
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
