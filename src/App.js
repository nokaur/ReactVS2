import React from "react";
import "./styles.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/ClassComponent";
import Hello from "./Components/JSX";
import Message from "./Components/State";
import Counter from "./Components/SetState";
import OnClick from "./Components/EventHandling";

export default function App() {
  return (
    <div className="App">
      <OnClick />
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Novel" />
      <Greet name="Noveldeep" />
      <Welcome></Welcome>
      <Hello /> */}
    </div>
  );
}
