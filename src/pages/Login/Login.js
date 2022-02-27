import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/header/header";
import { connect } from "react-redux";
import "./Login.css";
import { userLogin } from "../../redux/action/authAction";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Login = ({ userLogin, isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const validate = validateEmail(email);
  };

  const login = async (e) => {
    e.preventDefault();

    let body = {
      email,
      password,
    };
    await userLogin(body);
  };

  if (isLoggedIn) {
    <Redirect to="/" />;
  }
  return (
    <>
      <div className="login__container">
        <Header />
        <div className="login__card">
          <h2>Login</h2>
          <div className="login__card__email">
            <label htmlFor="email">Email address</label>
            <input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div className="login__card__password">
            <div>
              <label htmlFor="password">Password</label>
              <p>Forgot your password?</p>
            </div>

            <input
              placeholder="Enter your password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={(e) => login(e)}>Login</button>
          <p>
            New to MyJobs <span>Create an account</span>
          </p>
        </div>
      </div>{" "}
      <div className="login__bottom"></div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});

export default connect(mapStateToProps, { userLogin })(Login);
