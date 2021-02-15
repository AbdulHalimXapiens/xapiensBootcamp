import React from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";

import "../../css/auth.css";

const Signin = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    // login,
    validate
  );

  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = React.useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    fetch("http://localhost:8000/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.email,
        password: data.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((resJson) => {
        dispatch({
          type: "LOGIN",
          payload: resJson,
        });
      })
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText,
        });
      });
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleFormSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                autoComplete="off"
                type="email"
                name="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                placeholder="Enter email"
                value={data.email || values.email}
                onChange={handleInputChange}
              />
              <div>
                {errors.email && <p className="color">{errors.email}</p>}
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${errors.password && "is-invalid"}`}
                placeholder="Enter password"
                value={data.password || values.password}
                onChange={handleInputChange}
              />
              <div>
                {errors.password && <p className="color">{errors.password}</p>}
              </div>
              {data.errorMessage && (
                <span className="form-error">{data.errorMessage}</span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-block"
              style={{ backgroundColor: "#949e93", color: "white" }}
            >
              Submit
            </button>

            <p className="signin-signup text-right">
              Don't have an account?
              <NavLink to="/sign-up"> Sign Up</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
