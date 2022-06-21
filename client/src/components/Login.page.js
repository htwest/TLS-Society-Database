import React, { Fragment } from "react";
import Login from "../components/landing/Login";

import Getuser from "../components/testing/GetUser";

export const LoginPage = () => {
  return (
    <Fragment>
      <Login />
      <br />
      <Getuser />
    </Fragment>
  );
};

export default LoginPage;
