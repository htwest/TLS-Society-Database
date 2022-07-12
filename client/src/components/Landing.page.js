import React, { Fragment } from "react";
import Login from "../components/landing/Login";
import Register from "../components/landing/Register";

export const LandingPage = () => {
  return (
    <Fragment>
      <h1>Landing Page</h1>
      <br />
      <Login />
      <br />
      <Register />
    </Fragment>
  );
};
