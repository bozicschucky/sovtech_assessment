import React from "react";
import "./App.css";
import AllPeople from "./components/People";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the home page</p>
        <AllPeople />
      </header>
    </div>
  );
}

export default App;
