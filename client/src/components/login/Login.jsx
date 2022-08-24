import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import {
  VStack,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";

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
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [err, setErr] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validateLogin(username, pass, setErr);
    if (validate) {
      await postLogin(username, pass)
        .then((res) => {
          setUser(res.data);
          window.localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/profile");
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
      justify="center"
      h="80vh"
      spacing="1rem"
    >
      <Box w="100%" display="flex" flexDirection="column" alignItems="center">
        <Heading className="form-header" color="white.200">
          Log In
        </Heading>
        <FormControl className="form-item" isInvalid={err}>
          <FormLabel color="white.200">Username</FormLabel>
          <Input
            type="text"
            name="user_name"
            value={username}
            placeholder="Enter Username"
            _placeholder={{ color: "black.100" }}
            bg="white.100"
            autoComplete="off"
            size="lg"
            onChange={(e) => {
              setErr();
              setUsername(e.target.value);
            }}
          />
          <FormErrorMessage>{err}</FormErrorMessage>
        </FormControl>

        <FormControl className="form-item" isInvalid={err}>
          <FormLabel color="white.200">Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={pass}
            placeholder="Enter Password"
            autoComplete="off"
            _placeholder={{ color: "black.100" }}
            bg="white.100"
            size="lg"
            onChange={(e) => {
              setErr();
              setPass(e.target.value);
            }}
          />
          <FormErrorMessage>{err}</FormErrorMessage>
        </FormControl>
      </Box>

      <ButtonGroup pt="1rem">
        <Button colorScheme="blue" type="submit">
          Log In
        </Button>
        <Button colorScheme="gray" onClick={() => navigate("/register")}>
          Create Account
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Login;
