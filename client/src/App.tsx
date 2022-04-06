import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllPeople from "./components/People";
import PeopleDetails from "./components/PeopleDetails";
import NavBar from "./components/nav";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="person/:name" element={<PeopleDetails />} />
          <Route path="/" element={<AllPeople />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
