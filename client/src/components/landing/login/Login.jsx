import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import {
  VStack,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";

// Components
import ErrorModal from "../ErrorModal";

// Api
import postLogin from "../../../api/postLogIn";

// Hooks
import validateForm from "../../../hooks/validateForm";

// Context
import UserContext from "../../../utils/UserContext";

const Login = ({ setRegister }) => {
  // Context
  const { setUser } = useContext(UserContext);

  // States
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [err, setErr] = useState();
  const [loginErr, setLoginErr] = useState();

  // Functions
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      pass,
    };
    const validate = validateForm(setErr, onOpen, data);
    if (validate) {
      await postLogin(data)
        .then((res) => {
          setUser(res.data);
          window.localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/profile");
        })
        .catch((err) => {
          setLoginErr("Invalid Username and/or Password");
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
      <ErrorModal isOpen={isOpen} onClose={onClose} err={err} setErr={setErr} />
      <Heading>Log In</Heading>
      <FormControl isInvalid={loginErr}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="user_name"
          value={username}
          placeholder="Enter Username"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setLoginErr();
            setUsername(e.target.value);
          }}
        />
        <FormErrorMessage>{loginErr}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={loginErr}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={pass}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setLoginErr();
            setPass(e.target.value);
          }}
        />
        <FormErrorMessage>{loginErr}</FormErrorMessage>
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
