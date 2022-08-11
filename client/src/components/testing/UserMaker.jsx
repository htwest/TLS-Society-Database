import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Button,
} from "@chakra-ui/react";

import postApplicant from "../../api/postApplicant";

const UserMaker = () => {
  // States
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [lName, setLname] = useState();
  const [fName, setFname] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
      lName,
      fName,
      email,
    };
    await postApplicant(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <VStack
      justify="center"
      spacing="1rem"
      as="form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="user_name"
          value={username}
          placeholder="Enter Username"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Name</FormLabel>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Input
              type="text"
              name="first_name"
              placeholder="First"
              value={fName}
              autoComplete="off"
              size="lg"
              onChange={(e) => {
                setFname(e.target.value);
              }}
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
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </GridItem>
        </Grid>
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>
  );
};

export default UserMaker;
