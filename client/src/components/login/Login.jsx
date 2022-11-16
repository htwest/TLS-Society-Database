import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Box,
} from "@chakra-ui/react";
import "../../css/login/Login.css";
import "../../css/buttons/buttons.css";

// Api
import postLogin from "../../api/postLogIn";

// Hooks
import validateLogin from "../../hooks/validateLogin";

// Context
import UserContext from "../../utils/UserContext";

const Login = () => {
  // Context
  const { setUser } = useContext(UserContext);

  // States
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validateLogin(username, pass, setErr);
    if (validate) {
      await postLogin(username, pass)
        .then((res) => {
          setUser(res.data);
          window.localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/dashboard");
        })
        .catch((err) => {
          setErr("Invalid Username and/or Password");
        });
    }
  };

  const navigate = useNavigate();

  return (
    <VStack
      as="form"
      onSubmit={(e) => handleSubmit(e)}
      w={{ base: "90%", md: "500px" }}
      m="auto"
      // justify="center"
      h="100vh"
      spacing="1rem"
    >
      <Box
        w="100%"
        color="#F5F5F5"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading className="form-header">Log In</Heading>
        <FormControl className="form-item" color="white.200" isInvalid={err}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="user_name"
            value={username}
            placeholder="Enter Username"
            _placeholder={{ color: "black.100" }}
            bg="white.100"
            color="black"
            autoComplete="off"
            size="lg"
            onChange={(e) => {
              setErr();
              setUsername(e.target.value);
            }}
          />
          <FormErrorMessage>{err}</FormErrorMessage>
        </FormControl>

        <FormControl className="form-item" color="white.200" isInvalid={err}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={pass}
            autoComplete="off"
            placeholder="Enter Password"
            _placeholder={{ color: "black.100" }}
            bg="white.100"
            color="black"
            size="lg"
            onChange={(e) => {
              setErr();
              setPass(e.target.value);
            }}
          />
          <FormErrorMessage>{err}</FormErrorMessage>
        </FormControl>
      </Box>

      <div className="login-button-group">
        <button className="alt-button" type="submit">
          Log In
        </button>
        <button onClick={() => navigate("/register")}>Create Account</button>
      </div>
    </VStack>
  );
};

export default Login;
