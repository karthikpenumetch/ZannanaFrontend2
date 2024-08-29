import React from "react";
import "./Login_page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import diceImage from "./loginpage_dice.png";

const App = () => {
  return (
    <div className="Login">
      <div className="login-container">
        <div className="login-left">
          <img src={diceImage} alt="Login" />
        </div>
        <div className="login-right">
          <div className="login-header">
            <h2>LOG IN</h2>
            <div className="social-login">
              <a href="#" className="social-btn">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="social-btn">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </a>
              <a href="#" className="social-btn">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" className="social-btn">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
            <p>or, continue with your email</p>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="username">Email/Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="form-group">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-btn">
              LOG IN
            </button>
          </form>
          <p>
            Need an account? <a href="#">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
