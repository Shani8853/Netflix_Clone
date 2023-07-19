import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import "./signup.css";
import { firebaseAuth } from "../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      const { email, password } = formData;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
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
    <div className="signup-container">
      <BackgroundImage />
      <div className="content-signup">
        <Header />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies, TV Shows And More</h1>
            <h4>Watch anywhere, Cancel anytime</h4>
            <h6>Ready to watch? Enter your email</h6>
          </div>
          <div className="form-signup">
            <input
              type="email"
              className="signup-email"
              placeholder="Email Address"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
            />
            {showPassword && (
              <input
                className="signup-pass"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            )}
            {!showPassword && (
              <button
                onClick={() => setShowPassword(true)}
                className="btn-started"
              >
                Get Started
              </button>
            )}
          </div>
          <button className="btn-signup" onClick={handleSignIn}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
