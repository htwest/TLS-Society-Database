import React, { useState } from "react";
import { useNavigate } from "react-router";
import validateSignUp from "../../hooks/validateSignUp";
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

import postRegister from "../../api/postRegister";

const SignUp = ({ setRegister }) => {
  const [user, setUser] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validateSignUp(
      user,
      pass,
      fName,
      lName,
      email,
      setErr,
      setErrMsg
    );

    if (validate) {
      await postRegister(user, pass, fName, lName, email).then((data) => {
        navigate("/");
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
      h="100vh"
      spacing="1rem"
    >
      <Heading>Sign Up</Heading>
      <FormControl isInvalid={err}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={user}
          placeholder="Enter Username"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setErr(false);
            setUser(e.target.value);
          }}
        />
        <FormErrorMessage>{errMsg}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={err}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={pass}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setErr(false);
            setPass(e.target.value);
          }}
        />
        <FormErrorMessage>{errMsg}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={err}>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          name="fname"
          value={fName}
          placeholder="First Name"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setErr(false);
            setFName(e.target.value);
          }}
        />
        <FormErrorMessage>{errMsg}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={err}>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          name="lname"
          value={lName}
          placeholder="Last Name"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setErr(false);
            setLName(e.target.value);
          }}
        />
        <FormErrorMessage>{errMsg}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={err}>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          name="email"
          value={email}
          placeholder="Last Name"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setErr(false);
            setEmail(e.target.value);
          }}
        />
        <FormErrorMessage>{errMsg}</FormErrorMessage>
      </FormControl>

      <ButtonGroup pt="1rem">
        <Button colorScheme="teal" type="submit">
          Create Account
        </Button>
        <Button onClick={() => setRegister(false)}>Back</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default SignUp;
