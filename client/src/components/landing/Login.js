import React, { Fragment, useRef, useState, useEffect } from "react";

import { userLogin } from "../../api/fetchLogin";

const Login = () => {
  // Refs and States
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errDisplay, setErrDisplay] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // Effects
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  // User Functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    userLogin([user, pwd])
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
        {errDisplay ? (
          <p ref={errRef} aria-live="assertive">
            {errMsg}
          </p>
        ) : null}
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login-username">Username:</label>
          <input
            type="text"
            id="login-username"
            ref={userRef}
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