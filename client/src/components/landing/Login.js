import React, { Fragment, useState, useEffect } from "react";

import { postLogin } from "../../api/postLogin";
import LoginError from "../error/LoginError";

const Login = () => {
  // Refs and States
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errDisplay, setErrDisplay] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // Effects

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  // User Functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    postLogin([user, pwd])
      .then((data) => {
        console.log(data);

        setUser("");
        setPwd("");
        setErrDisplay(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Fragment>
      <section>
        <h1>Sign In</h1>
        {errDisplay ? <LoginError errMsg={errMsg} /> : null}
        <form onSubmit={handleSubmit}>
          <label htmlFor="login-username">Username:</label>
          <input
            type="text"
            id="login-username"
            autoComplete="off"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
            required
          />
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            autoComplete="current-password"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={pwd}
            required
          />
          <button>Sign In</button>
        </form>
      </section>
    </Fragment>
  );
};

export default Login;
