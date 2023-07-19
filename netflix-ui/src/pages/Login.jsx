import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import "./Login.css";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = async () => {
    try {
      const { email, password } = formData;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });

  return (
    <div className="login-container">
      <BackgroundImage />
      <div className="login-content">
        <Header />
        <div className="form-container">
          <div className="form-login">
            <div>
              <h1>Log In</h1>
            </div>
            <div className="input-container">
              <input
                className="login-email"
                type="email"
                placeholder="Email Address"
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
              />
              <input
                className="login-password"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <button onClick={handleLogIn} className="btn-login">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
