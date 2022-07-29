import React, { useState } from "react";
import Login from "./login/Login";
import Signup from "./signup/Signup";

const Landing = () => {
  const [register, setRegister] = useState(false);

  return register ? (
    <Signup setRegister={setRegister} />
  ) : (
    <Login setRegister={setRegister} />
  );
};

export default Landing;
