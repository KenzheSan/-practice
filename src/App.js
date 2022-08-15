import React from "react";
import "./App.css";
import Animal from "./components/Animal";

function App() {
  return (
    <div className="App">
      <Animal animal="Уй" age={23} color="red" isHas={true} />
      <Animal animal="Жылкы" age={11} color="blue" />
    </div>
  );
}

export default App;
