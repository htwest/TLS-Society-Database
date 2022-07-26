import React, { useState } from "react";
import { VStack, ButtonGroup, Button } from "@chakra-ui/react";

// Components
import UserForm from "./signup/UserForm";

// Api
import postRegister from "../../api/postRegister";

const SignUp = ({ setRegister }) => {
  const [userData, setUserData] = useState();
  const [err, setErr] = useState();

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
      <UserForm setRegister={setRegister} setUserData={setUserData} />
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
