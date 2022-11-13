import React from "react";
import web_assist_logo from "../../images/main_logo2.svg";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <img alt="Logo" src={web_assist_logo} />
    </div>
  );
}

export default Navbar;
