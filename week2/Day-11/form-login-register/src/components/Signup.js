import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import * as Yup from "yup";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string("Enter your name").required("Name is required"),
      email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string("Enter your password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
      phoneNumber: Yup.string("Enter your phone number").required(
        "Phone Number is required"
      ),
      address: Yup.string("Enter your address").required("Address is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.name && formik.errors.name ? (
        <div className="color">{formik.errors.name}</div>
      ) : null}

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Your Email"
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
          placeholder="Your Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="color">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="number"
          name="phoneNumber"
          className="form-control"
          placeholder="Your Phone Number"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="color">{formik.errors.phoneNumber}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          className="form-control"
          placeholder="Your Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="color">{formik.errors.address}</div>
        ) : null}
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
        <Link to={"/sign-in"}>
          <a href="#"> sign in?</a>
        </Link>
      </p>
    </form>
  );
};

export default Signup;
