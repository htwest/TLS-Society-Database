import React, { useState } from "react";
import { VStack, ButtonGroup, Button, useDisclosure } from "@chakra-ui/react";

// Components
import UserForm from "./signup/UserForm";
import ErrorModal from "./signup/ErrorModal";

// Api
import postRegister from "../../api/postRegister";

const SignUp = ({ setRegister }) => {
  const [userData, setUserData] = useState();
  const [err, setErr] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async () => {
    await postRegister(userData).then((data) => {
      setRegister(false);
    });
  };

  return (
    <VStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      <ErrorModal isOpen={isOpen} onClose={onClose} err={err} setErr={setErr} />
      <UserForm setErr={setErr} setUserData={setUserData} onOpen={onOpen} />
      {userData ? (
        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" onClick={() => handleSubmit()}>
            Create Account
          </Button>
          <Button onClick={() => setRegister(false)}>Back</Button>
        </ButtonGroup>
      ) : null}
    </VStack>
  );
};

export default SignUp;
