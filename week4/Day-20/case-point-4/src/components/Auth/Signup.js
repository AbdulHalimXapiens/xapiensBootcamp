import React from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log("No errors, submit callback called!");
  }

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>Name</label>
              <input
                autoComplete="off"
                type="text"
                name="name"
                className={`form-control ${errors.name && "is-invalid"}`}
                placeholder="Your Name"
                value={values.name || ""}
                onChange={handleChange}
              />
            </div>
            <div>{errors.name && <p className="color">{errors.name}</p>}</div>

            <div className="form-group">
              <label>Email</label>
              <input
                autoComplete="off"
                type="email"
                name="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                placeholder="Your Email"
                value={values.email || ""}
                onChange={handleChange}
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
                placeholder="Your Password"
                value={values.password || ""}
                onChange={handleChange}
              />
              <div>
                {errors.password && <p className="color">{errors.password}</p>}
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="number"
                min="0"
                name="phoneNumber"
                className={`form-control ${
                  errors.phoneNumber && "is-invalid"
                } no-arrow`}
                placeholder="Your Phone Number"
                value={values.phoneNumber || ""}
                onChange={handleChange}
              />
              <div>
                {errors.phoneNumber && (
                  <p className="color">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                className={`form-control ${errors.address && "is-invalid"}`}
                placeholder="Your Address"
                value={values.address || ""}
                onChange={handleChange}
              />
              <div>
                {errors.address && <p className="color">{errors.address}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-block"
              style={{ backgroundColor: "#949e93", color: "white" }}
            >
              Sign Up
            </button>
            <p className="signin-signup text-right">
              Already registered
              <NavLink to="/"> sign in?</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
