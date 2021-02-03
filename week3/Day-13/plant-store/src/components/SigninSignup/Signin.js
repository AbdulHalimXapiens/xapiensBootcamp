import React from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { Link } from "react-router-dom";

const Signin = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log("No errors, submit callback called!");
  }

  return (
    <form onSubmit={handleSubmit} novalidate>
      <h3>Sign In</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          autoComplete="off"
          type="email"
          name="email"
          className={`form-control ${errors.email && "is-invalid"}`}
          placeholder="Enter email"
          value={values.email || ""}
          onChange={handleChange}
        />
        <div>{errors.email && <p className="color">{errors.email}</p>}</div>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className={`form-control ${errors.password && "is-invalid"}`}
          placeholder="Enter password"
          value={values.password || ""}
          onChange={handleChange}
        />
        <div>
          {errors.password && <p className="color">{errors.password}</p>}
        </div>
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
        <Link to={"/sign-up"}>
          <a href="#"> Sign Up</a>
        </Link>
      </p>
    </form>
  );
};

export default Signin;
