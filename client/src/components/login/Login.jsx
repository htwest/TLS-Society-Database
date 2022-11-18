import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";

import "../../css/login/Login.css";

// Api
import postLogin from "../../api/postLogIn";

// Hooks
import validateLogin from "../../hooks/validateLogin";

// Context
import UserContext from "../../utils/UserContext";

// Components
import LoginForm from "./LoginForm";

const Login = () => {
  // Context
  const { setUser } = useContext(UserContext);

  // States
  // const [username, setUsername] = useState("");
  // const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const clearError = () => {
    setErr(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validateLogin(userData.username, userData.password);
    if (validate) {
      await postLogin(userData.username, userData.password)
        .then((res) => {
          setUser(res.data);
          window.localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/dashboard");
        })
        .catch((err) => {
          setErr(true);
        });
    } else {
      setErr(true);
    }
  };

  return (
    <div id="login-body">
      <LoginForm
        state={userData}
        setState={setUserData}
        errorState={err}
        clearError={clearError}
        handleSubmit={handleSubmit}
        navigate={navigate}
      />
    </div>
  );
};

export default Login;
