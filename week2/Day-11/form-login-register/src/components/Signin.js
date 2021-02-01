import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signin extends Component {
  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-block"
          style={{ backgroundColor: "#949e93" }}
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
  }
}
