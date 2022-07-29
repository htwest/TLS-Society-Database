import React, { useState, useContext, useDisclosure } from "react";
import { useNavigate } from "react-router";
import {
  VStack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

// Api
import postLogin from "../../../api/postLogIn";

// Hooks
import validateLogIn from "../../../hooks/validateLogIn";
import validateForm from "../../../hooks/validateForm";

// Components
import ErrorModal from "../ErrorModal";

// Context
import UserContext from "../../../utils/UserContext";

const Login = ({ setRegister }) => {
  // Context
  const { setUser } = useContext(UserContext);

  // States
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [err, setErr] = useState();

  // Functions
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validateForm(setErr, onOpen, username, pass);
    if (validate) {
      await postLogin(username, pass).then((res) => {
        if (res) {
          setUser(res.data);
          navigate("/profile");
        } else {
          setErr("Invalid Username or Password");
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
          value={pass}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
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
