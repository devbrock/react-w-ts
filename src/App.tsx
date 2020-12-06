import React, { useState } from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  // the value of text can be either null or a string
  const [text, setText] = useState<string | null>();
  // the value of the message can only be a string, therefore we must initialize it to be an empty sting
  const [message, setMessage] = useState<string>("");
  // set the type of name to be a string
  const name: string = "brock";
  // set the type of age to be a number
  const age: number = 24;
  // create a boolean to show content on the screen
  const show: boolean = true;
  // create a function that takes in a message of type string as a perameter
  const displayMessage = (message: string) => {
    setMessage(message);
  };

  return (
    <div className="App">
      <h1> Typescript 🔥</h1>
      {show ? (
        <p>
          {name} is {age} years old{" "}
        </p>
      ) : (
        ""
      )}
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
      />
      <p>{text}</p>
      <button
        onClick={() => {
          displayMessage("You clicked the button! 🚀");
        }}
      >
        Click Me 😄
      </button>
      <p>{message}</p>

      <Person show={true} name="brock" />
      <Person show={false} name="josh" />
    </div>
  );
}

export default App;
