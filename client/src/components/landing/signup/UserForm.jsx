import React, { useState } from "react";
import {
  VStack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

// Hooks
import validateSignUp from "../../../hooks/validateSignUp";

const UserForm = ({ setRegister, setUserData }) => {
  const [user, setUser] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validateSignUp(user, pass, fName, lName, email);
    if (validate) {
      setUserData([user, fName, lName, email, pass]);
    }
  };
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
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={user}
          placeholder="Enter Username"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={pass}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          name="fname"
          value={fName}
          placeholder="First Name"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setFName(e.target.value);
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          name="lname"
          value={lName}
          placeholder="Last Name"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setLName(e.target.value);
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          name="email"
          value={email}
          placeholder="Last Name"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>

      <ButtonGroup pt="1rem">
        <Button colorScheme="teal" type="submit">
          Add User Data
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default UserForm;
