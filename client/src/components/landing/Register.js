import React, { Fragment, useRef, useState, useEffect } from "react";

import { userRegister } from "../../api/fetchRegister";

const Register = () => {
  // Refs and States
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");

  const [errDisplay, setErrDisplay] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // Effects
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, fName, lName, email]);

  // User Functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    userRegister([user, pwd, fName, lName, email])
      .then((data) => {
        console.log(data);

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
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
<<<<<<< HEAD
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
=======
          <label htmlFor="register-username">Username:</label>
          <input
            type="text"
            id="register-username"
>>>>>>> login
            autoComplete="off"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
            required
          />
<<<<<<< HEAD
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
=======
          <label htmlFor="register-password">Password:</label>
          <input
            type="password"
            id="register-password"
>>>>>>> login
            autoComplete="current-password"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={pwd}
            required
          />
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            autoComplete="off"
            onChange={(e) => {
              setFname(e.target.value);
            }}
            value={fName}
            required
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            autoComplete="off"
            onChange={(e) => {
              setLname(e.target.value);
            }}
            value={lName}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
          <button>Sign Up</button>
        </form>
      </section>
    </Fragment>
  );
};

export default Register;
