import React from "react";
import background from "../assets/login.jpg";
import "./BackgroundImage.css";

export default function BackgroundImage() {
  return (
    <div className="background-container">
      <img src={background} alt="background" className="logo" />
    </div>
  );
}
