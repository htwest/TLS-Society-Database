import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import validateLogIn from "../../hooks/validateLogIn";
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

// Api
import postLogin from "../../api/postLogIn";

// Context
import UserContext from "../../utils/UserContext";

const Login = ({ setRegister }) => {
  // Context
  const { setUser } = useContext(UserContext);

  // States
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [usrErr, setUsrErr] = useState();
  const [passErr, setPassErr] = useState();

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validateLogIn(username, pass, setUsrErr, setPassErr);
    if (validate) {
      await postLogin(username, pass).then((res) => {
        if (res) {
          setUser(res.data);
          navigate("/profile");
        } else {
          setUsrErr("Invalid Username or Password");
          setPassErr("Invalid Username or Password");
        }
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
      <Heading>Log In</Heading>
      <FormControl isInvalid={usrErr}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="user_name"
          value={username}
          placeholder="Enter Username"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setUsrErr();
            setPassErr();
            setUsername(e.target.value);
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
        <Button onClick={() => setRegister(true)}>Create Account</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Login;
