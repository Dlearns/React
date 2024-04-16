import React, { useState } from "react";
import "./App.css";
import { ChildComponent } from "./ChildComponent";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName) {
      // submit form
      setFirstNameError("Required");
    } else if (!lastName) {
      setLastNameError("Required");
    } else if (!email) {
      setEmailError("Required");
    } else {
      console.log("Form submitted");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>First Name: </label>
          <br />
          <input
            name={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          {firstNameError && <p>{firstNameError}</p>}
          <br />

          <label>Last Name: </label>
          <br />
          <input
            name={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          {lastNameError && <p>{lastNameError}</p>}
          <br />
          <label>Email: </label>
          <br />
          <input
            name={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && <p>{emailError}</p>}
          <br />
          <br></br>

          <label>A child component: </label>
          <ChildComponent firstName={firstName} />

          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
