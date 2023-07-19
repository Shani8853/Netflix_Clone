import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="logo" id="header-logo" />
      </div>
      <button
        id="btn-header"
        onClick={() => navigate(props.login ? "/login" : "/signup")}
      >
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </div>
  );
}
