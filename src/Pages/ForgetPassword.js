import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Component/Footer";
import HeaderBar from "../Component/HeaderBar";
import Form from "../utilities/Forms";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const forgotPassword = (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      alert("Reset password link is sent to " + email);
      setValidate({});
      setEmail("");
    }
  };

  return (
    <div className="container">
      <HeaderBar />
      <div className="auth-wrapper">
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
          <div className="d-flex flex-column align-content-end">
            <div className="auth-body">
              <p className="auth-head">Forgot Password</p>
              <p className="auth-description">
                Enter the email associated with your account and we’ll send an
                email with instruction to reset your password
              </p>
              <div className="auth-form-container text-start">
                <form
                  className="auth-form"
                  method="POST"
                  onSubmit=""
                  autoComplete={"off"}
                >
                  <div className="email">
                    <p className="form-header">Email</p>
                    <input
                      type="email"
                      className={`form-control ${
                        validate.validate && validate.validate.email
                          ? "is-invalid "
                          : ""
                      }`}
                      id="email"
                      name="email"
                      value={email}
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div
                      className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.email
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      {validate.validate && validate.validate.email
                        ? validate.validate.email[0]
                        : ""}
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="submit-password-reset">
                      Forgot Password
                    </button>
                  </div>
                </form>

                <hr />
                <div className="auth-option">
                  <Link className="text-link" to="/login">
                    Back to Login
                  </Link>
                </div>
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
};

export default ForgetPassword;
