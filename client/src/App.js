import './App.css';
import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing/Landing.js";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import LearnMore from './Pages/LearnMore/LearnMore.js';
import ToUse from "./Pages/ToUse/ToUse.js"
import BugFix from "./Pages/BugFix/BugFix.js"
import Settings from "./Pages/Settings/Settings.js"

function App() {

  const [homeName,setHomeName] = useState("");
  const [role,setRole] = useState("");

  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login setHomeName={setHomeName} setRole={setRole} />} />
          <Route path="/home" element={<Home homeName={homeName} role={role}/>} />
          <Route path="/learn_more" element={<LearnMore />} />
          <Route path="/usermanual" element={<ToUse />} />
          <Route path="/bugFix" element={<BugFix />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
