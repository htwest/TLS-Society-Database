import React, { useState, useEffect } from "react";
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
import validateForm from "../../../hooks/validateForm";

const UserForm = ({
  userData,
  setRegister,
  setErr,
  setUserData,
  onOpen,
  disp,
  setDisp,
}) => {
  // States
  const [user, setUser] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // Effects
  useEffect(() => {
    if (userData) {
      setUser(userData[0]);
      setFName(userData[1]);
      setLName(userData[2]);
      setEmail(userData[3]);
      setPass(userData[4]);
    }
  }, [userData]);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validateForm(
      setErr,
      onOpen,
      user,
      fName,
      lName,
      email,
      pass
    );
    if (validate) {
      setUserData([user, fName, lName, email, pass]);
      setDisp(disp + 1);
    }
  };
  return (
    <VStack
      as="form"
      w={{ base: "90%", md: "500px" }}
      onSubmit={(e) => handleSubmit(e)}
      m="auto"
      justify="center"
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
          Next
        </Button>
        <Button onClick={() => setRegister(false)}>Back</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default UserForm;
