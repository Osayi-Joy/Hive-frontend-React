import React, { useState } from "react";
import "./CSS/login.css";
import "../Pages/CSS/login.css";
import icon from "../Assets/Icon.png";
import HeaderBar from "../Component/HeaderBar";
import { Link } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa';



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setIsLoading(true);
    
    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Password validation
    if (password === "") {
      setPasswordError("Please enter a password");
      setIsLoading(false);
      return;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      setIsLoading(false);
      return;
    } else if (!password.match(/[A-Z]/)) {
      setPasswordError("Password must contain at least one uppercase letter");
      setIsLoading(false);
      return;
    } else if (!password.match(/[a-z]/)) {
      setPasswordError("Password must contain at least one lowercase letter");
      setIsLoading(false);
      return;
    } else if (!password.match(/[0-9]/)) {
      setPasswordError("Password must contain at least one number");
      setIsLoading(false);
      return;
    } else if (!password.match(/[^A-Za-z0-9]/)) {
      setPasswordError("Password must contain at least one symbol");
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("token", data.result.token);
  
        const roles = JSON.parse(atob(localStorage.getItem("token").split(".")[1]))
          .roles;
  
        if (roles.includes("TASKER")) {
          window.location.href = "/dashboard";
        } else if (roles.includes("DOER")) {
          window.location.href = "/dashboard";
        }
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
      setPasswordError("Email and Password do not match")
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
        <HeaderBar/>
      <div className="form-box">
        <h2>Hi, Welcome back</h2>
        <form onSubmit={handleSubmit} >
          <div className="input-group">
            <div className="email">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="error">{emailError}</div>}
            </div>
            <div className="password-input">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className="error">{passwordError}</div>}
            </div>
            <div className="forgot-link">
              <p>
                <Link className="forgot-password" to={"/forget-password"}>
                  Forgot password?
                </Link>
              </p>
            </div>
            <div className="login-button">
              <button type="submit" disabled={isLoading}>{isLoading ? <FaSpinner className="spinner" /> : "Login"}</button>
              <p>
                Don't have an account?
                <Link className="create-account-link" to={"/register"}>
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
