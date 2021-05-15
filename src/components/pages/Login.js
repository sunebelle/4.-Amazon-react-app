import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/Amazon-01.png";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        history.goBack();
        // history.push("/");
        // history.goForward();
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userAuth) => {
        // console.log(userAuth.user);
        if (userAuth) {
          history.goBack();
          // history.push("/");
          // history.goForward();
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="container-fluid login">
      <div className="login__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login__section">
        <form className="login__form">
          <h3>Sign-In</h3>
          <div className="input__login">
            <label> Email or mobile phone number </label>
            <input
              type="email"
              required
              onChange={handleChange}
              value={user.email}
              min="6"
              name="email"
            />
          </div>
          <div className="input__login">
            <label> Password </label>
            <input
              type="password"
              required
              onChange={handleChange}
              value={user.password}
              placeholder="At least 8 characters"
              // minLength="8" does not work
              // maxLength="10"
              name="password"
            />
          </div>
          <button
            type="submit"
            onClick={handleSignin}
            className="d-block w-100 loginBtn__signin my-3"
          >
            Sign In
          </button>
          <span className="login__text p-0">
            By continuing, you agree to React - Amazon's Conditions of Use and
            Privacy Notice.
          </span>
        </form>
      </div>
      {/* <div className="login__middle">New to Amazon?</div> */}

      <div className="login__footer my-4">
        <button
          type="submit"
          onClick={handleRegister}
          className="loginBtn__footer w-100"
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
