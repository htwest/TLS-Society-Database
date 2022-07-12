import React, { useState } from "react";
import { useNavigate } from "react-router";
import validateLogIn from "../../hooks/validateLogIn";
import postLogIn from "../../hooks/postLogIn";

import {
  VStack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";

const Login = () => {
  // States
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [usrErr, setUsrErr] = useState();
  const [passErr, setPassErr] = useState();

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validateLogIn(user, pass, setUsrErr, setPassErr);
    if (validate) {
      await postLogIn(user, pass).then((data) => {
        console.log(data);
      });
    }
    setUser("");
    setPass("");
  };

  const navigate = useNavigate();

  return (
    <VStack
      as="form"
      onSubmit={(e) => handleSubmit(e)}
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      <Heading>Log In</Heading>
      <FormControl isInvalid={usrErr}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={user}
          placeholder="Enter Username"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setUsrErr();
            setPassErr();
            setUser(e.target.value);
          }}
        />
        <FormErrorMessage>{usrErr}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={passErr}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={pass}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setUsrErr();
            setPassErr();
            setPass(e.target.value);
          }}
        />
        <FormErrorMessage>{passErr}</FormErrorMessage>
      </FormControl>

      <ButtonGroup pt="1rem">
        <Button colorScheme="teal" type="submit">
          Log In
        </Button>
        <Button onClick={() => navigate("/register")}>Create Account</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Login;
