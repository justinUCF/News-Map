import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//components
import DailyNews from "./Components/DailyNews";
import Home from "./Components/Home";
import LoginForm from "./Components/login";
import Navbar from "./Components/Nav";
import SavedNews from "./Components/SavedNews";
import SignupForm from "./Components/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="v-100 h-100" style={{ paddingTop: "56px" }}>
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
