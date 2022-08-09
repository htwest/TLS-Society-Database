import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";

// Hooks
// import validateForm from "../../hooks/validateForm";

const UserForm = () => {
  const [err, setErr] = useState();
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();

  return (
    <>
      <FormControl isInvalid={err}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="user_name"
          value={username}
          placeholder="Enter Username"
          autoComplete="off"
          size="lg"
        />
        <FormErrorMessage>{err}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={pass}
          autoComplete="off"
          size="lg"
        />
        <FormErrorMessage>{err}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={err}>
        <FormLabel>Name</FormLabel>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Input
              type="text"
              name="first_name"
              value={fName}
              placeholder="First"
              autoComplete="off"
              size="lg"
            />
          </GridItem>
          <GridItem>
            <Input
              type="text"
              name="last_name"
              value={lName}
              placeholder="Last"
              autoComplete="off"
              size="lg"
            />
          </GridItem>
        </Grid>
        <FormErrorMessage>{err}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={email}
          autoComplete="off"
          size="lg"
        />
        <FormErrorMessage>{err}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default UserForm;
