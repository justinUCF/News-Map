import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Navbar from "./Components/Nav";
import Home from "./Components/Home";
import SavedNews from "./Components/SavedNews";
import DailyNews from "./Components/DailyNews";
import LoginForm from "./Components/login";
import SignupForm from "./Components/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<SavedNews />} />
          <Route path="/daily" element={<DailyNews />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
