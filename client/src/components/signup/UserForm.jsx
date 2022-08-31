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
        case "f_name":
          setFNameErr(true);
          break;
        case "l_name":
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
        <FormLabel color="white.200">Username</FormLabel>
        <Input
          type="text"
          name="user_name"
          value={userData.username}
          placeholder="Enter Username"
          _placeholder={{ color: "black.100" }}
          color="black.100"
          bg="white.100"
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
        <FormLabel color="white.200">Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          _placeholder={{ color: "black.100" }}
          color="black.100"
          bg="white.100"
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

      <FormControl color="white.200" isInvalid={lNameErr || fNameErr}>
        <FormLabel>Name</FormLabel>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Input
              type="text"
              name="first_name"
              value={userData.f_name}
              placeholder="First"
              _placeholder={{ color: "black.100" }}
              color="black.100"
              bg="white.100"
              autoComplete="off"
              size="lg"
              onChange={(e) => {
                setUserData({ ...userData, f_name: e.target.value });
                setLNameErr(false);
                setFNameErr(false);
              }}
            />
          </GridItem>
          <GridItem>
            <Input
              type="text"
              name="last_name"
              value={userData.l_name}
              _placeholder={{ color: "black.100" }}
              color="black.100"
              bg="white.100"
              placeholder="Last"
              autoComplete="off"
              size="lg"
              onChange={(e) => {
                setUserData({ ...userData, l_name: e.target.value });
                setLNameErr(false);
                setFNameErr(false);
              }}
            />
          </GridItem>
        </Grid>
        <FormErrorMessage>Please Enter Your Name</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={emailErr}>
        <FormLabel color="white.200">Email</FormLabel>
        <Input
          type="text"
          name="email"
          placeholder="Enter Email"
          _placeholder={{ color: "black.100" }}
          color="black.100"
          bg="white.100"
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
        <Button colorScheme="white" onClick={() => navigate("/")}>
          Back to Log In
        </Button>
        <Button colorScheme="blue" type="submit">
          Next
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default UserForm;
