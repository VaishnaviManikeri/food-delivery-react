import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/food-del-assets/assets/frontend_assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
            className="close-icon"
          />
        </div>

        <div className="login-popup-inputs">
          {/* Show name input only during Sign Up */}
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Show terms only during Sign Up */}
        {currState === "Sign Up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
          </div>
        )}

        <p className="login-popup-switch">
          {currState === "Login" ? (
            <>
              Create a new account?
              <span onClick={() => setCurrState("Sign Up")}> Click here</span>
            </>
          ) : (
            <>
              Already have an account?
              <span onClick={() => setCurrState("Login")}> Login here</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
