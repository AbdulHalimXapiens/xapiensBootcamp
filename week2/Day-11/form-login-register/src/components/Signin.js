import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import * as Yup from "yup";

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string("Enter your password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Sign In</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="color">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="color">{formik.errors.password}</div>
        ) : null}
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
