import { useState } from "react";

import { Footer } from "../Component/Footer";
import HeaderBar from "../Component/HeaderBar";


const Reset = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validate, setValidate] = useState('');
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
          setValidate('Passwords do not match');
        } else {
          // Passwords match, do something here like submit form
        }
      };
  
    return (
      <div className="container">
        <HeaderBar />
        <div className="auth-wrapper">
          <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
            <div className="d-flex flex-column align-content-end">
              <div className="auth-body">
                <p className="auth-head">Reset Password</p>
                <div className="auth-form-container text-start">
                  <form
                    className="auth-form"
                    method="POST"
                    onSubmit= {handleSubmit}
                    autoComplete={"off"}
                  >
                    <div className="email">
                      <label htmlFor="confirmPassword" className="form-header">New Password</label>
                      <input
                        type="password"
                        className="form-control-password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter your new password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
  
                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.password
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.password
                          ? validate.validate.password[0]
                          : ""}
                      </div>
                    </div>

                    <div className="email">
                    <label htmlFor="confirmPassword" className="form-header">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control-password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
  
                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.confirmPassword
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.confirmPassword
                          ? validate.validate.confirmPassword[0]
                          : ""}
                      </div>
                    </div>
                    <div>{validate}</div>
  
                    <div className="text-center">
                      <button type="submit" className="submit-password-reset">
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
}
 
export default Reset;