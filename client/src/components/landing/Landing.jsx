import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Landing = () => {
  const [register, setRegister] = useState(false);

  return register ? (
    <Signup setRegister={setRegister} />
  ) : (
    <Login setRegister={setRegister} />
  );
};

export default Landing;
