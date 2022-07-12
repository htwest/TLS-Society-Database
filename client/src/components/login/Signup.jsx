import React, { useState } from "react";
import { useNavigate } from "react-router";
import validateSignUp from "../../hooks/validateLogIn";
import postSignUp from "../../hooks/postSignUp";

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

const SignUp = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [usrErr, setUsrErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validateSignUp(user, pass, setUsrErr, setPassErr);
    if (validate) {
      await postSignUp(user, pass).then((data) => {
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
      <Heading>Sign Up</Heading>
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
            setUsrErr(false);
            setPassErr(false);
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
            setUsrErr(false);
            setPassErr(false);
            setPass(e.target.value);
          }}
        />
        <FormErrorMessage>{passErr}</FormErrorMessage>
      </FormControl>

      <ButtonGroup pt="1rem">
        <Button colorScheme="teal" type="submit">
          Create Account
        </Button>
        <Button onClick={() => navigate("/")}>Back</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default SignUp;
