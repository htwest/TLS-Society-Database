import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Grid,
  GridItem,
  Input,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

// Hooks
import validateForm from "../../hooks/validateForm";

const UserForm = ({ userData, setUserData, nextStep }) => {
  // States
  const [userErr, setUserErr] = useState();
  const [passErr, setPassErr] = useState();
  const [fNameErr, setFNameErr] = useState();
  const [lNameErr, setLNameErr] = useState();
  const [emailErr, setEmailErr] = useState();

  // Methods
  const navigate = useNavigate();

  const errorCheck = (errors) => {
    errors.forEach((element) => {
      switch (element) {
        case "username":
          setUserErr(true);
          break;
        case "password":
          setPassErr(true);
          break;
        case "fName":
          setFNameErr(true);
          break;
        case "lName":
          setLNameErr(true);
          break;
        case "email":
          setEmailErr(true);
          break;
        default:
          break;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validateForm(userData, errorCheck);
    if (validate) {
      nextStep();
    }
  };

  return (
    <VStack
      justify="center"
      spacing="1rem"
      as="form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <FormControl isInvalid={userErr}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="user_name"
          value={userData.username}
          placeholder="Enter Username"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setUserData({ ...userData, username: e.target.value });
            setUserErr(false);
          }}
        />
        <FormErrorMessage>Please Enter A Valid Username</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={passErr}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={userData.password}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
            setPassErr(false);
          }}
        />
        <FormErrorMessage>Please Enter a Valid Password</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={lNameErr || fNameErr}>
        <FormLabel>Name</FormLabel>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Input
              type="text"
              name="first_name"
              value={userData.fName}
              placeholder="First"
              autoComplete="off"
              size="lg"
              onChange={(e) => {
                setUserData({ ...userData, fName: e.target.value });
                setLNameErr(false);
                setFNameErr(false);
              }}
            />
          </GridItem>
          <GridItem>
            <Input
              type="text"
              name="last_name"
              value={userData.lName}
              placeholder="Last"
              autoComplete="off"
              size="lg"
              onChange={(e) => {
                setUserData({ ...userData, lName: e.target.value });
                setLNameErr(false);
                setFNameErr(false);
              }}
            />
          </GridItem>
        </Grid>
        <FormErrorMessage>Please Enter Your Name</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={emailErr}>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={userData.email}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
            setEmailErr(false);
          }}
        />
        <FormErrorMessage>Please Enter a Valid Email</FormErrorMessage>
      </FormControl>

      <ButtonGroup>
        <Button onClick={() => navigate("/")}>Back to Log In</Button>
        <Button type="submit">Next</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default UserForm;
