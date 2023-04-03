// import React from "react";
// import "./CSS/login.css";
// import "../Pages/CSS/login.css";
// import icon from "../Assets/Icon.png";

// const Login = () => {

//   return (
//     <div className="container">
//       <div className="form-box">
//         <h2>Hi, Welcome back</h2>
//         <form action="">
//           <div className="input-group">
//             <div className="email">
//               <p>Email</p>
//               <input type="text" placeholder="Enter  your  email"/>
//             </div>
//             <div className="password-input">
//               <p>Password</p>
//               <input type="password" placeholder="Enter  your  password"/>
//             </div>
//             <div className="forgot-link">
//               <p><a href={"/forget-password"} className="forgot-password">Forgot password?</a></p>
//             </div>
//             <div className="login-button">
//               <button onClick={"/dashboard"}>Login</button>
//               <p>Don't have an account?<a href={"/register"} className="create-account-link">Create account</a></p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./CSS/login.css";
import "../Pages/CSS/login.css";
import icon from "../Assets/Icon.png";
import HeaderBar from "../Component/HeaderBar";
import { Footer } from "../Component/Footer"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    
    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Password validation
    if (password === "") {
      setPasswordError("Please enter a password");
      return;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    } else if (!password.match(/[A-Z]/)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!password.match(/[a-z]/)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    } else if (!password.match(/[0-9]/)) {
      setPasswordError("Password must contain at least one number");
      return;
    } else if (!password.match(/[^A-Za-z0-9]/)) {
      setPasswordError("Password must contain at least one symbol");
      return;
    }

    // If all validations passed, redirect to the dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="container">
        <HeaderBar/>
      <div className="form-box">
        <h2>Hi, Welcome back</h2>
        <form onSubmit={handleSubmit}>
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
                <a href={"/forget-password"} className="forgot-password">
                  Forgot password?
                </a>
              </p>
            </div>
            <div className="login-button">
              <button type="submit">Login</button>
              <p>
                Don't have an account?
                <a href={"/register"} className="create-account-link">
                  Create account
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

