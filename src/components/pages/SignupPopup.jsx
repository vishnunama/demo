import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./SignupPopup.css";

const SignupPopup = ({ isOpen, onClose, onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    // Simulate successful signup
    console.log("User Signed Up:", { fullName, email, password });
    onSignup(email);  // Pass the email to the parent component
    onClose();  // Close the popup after signup
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <IoClose className="popup-close-icon" onClick={onClose} />
        <div className="popup-header">
          <h2 className="popup-title">Create A Free Account</h2>
        </div>
        <div className="popup-form">
          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <input
              id="full-name"
              type="text"
              placeholder="Your full name"
              className="form-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="infoname@mail.com"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="6+ characters, 1 Capital letter"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group-checkbox">
            <input id="terms" type="checkbox" className="checkbox-input" />
            <label className="label-text" htmlFor="terms">
              I agree to the terms & conditions
            </label>
          </div>

          <button className="btn btn-primary" onClick={handleSubmit}>
            Create An Account
          </button>

          <p className="already-member">
            Already a member? <a href="#" className="login-link">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
