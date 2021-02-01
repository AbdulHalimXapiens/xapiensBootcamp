import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Your Password"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Your Phone Number"
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Address"
          />
        </div>

        <button
          type="submit"
          className="btn btn-block"
          style={{ backgroundColor: "#949e93" }}
        >
          Sign Up
        </button>
        <p className="signin-signup text-right">
          Already registered
          <Link to={"/sign-in"}>
            <a href="#"> sign in?</a>
          </Link>
        </p>
      </form>
    );
  }
}
