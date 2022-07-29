import React, { useState } from "react";
import { VStack, ButtonGroup, Button, useDisclosure } from "@chakra-ui/react";

// Components
import ErrorModal from "./signup/ErrorModal";
import UserForm from "./signup/UserForm";
import InstituteForm from "./signup/InstituteForm";

// Api
import postRegister from "../../api/postRegister";

const SignUp = ({ setRegister }) => {
  const [userData, setUserData] = useState();
  const [disp, setDisp] = useState(0);
  const [firstInstitute, setFirstInstitute] = useState();
  const [err, setErr] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(userData);

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
      {disp === 0 ? (
        <UserForm
          userData={userData}
          setRegister={setRegister}
          setErr={setErr}
          setUserData={setUserData}
          onOpen={onOpen}
          disp={disp}
          setDisp={setDisp}
        />
      ) : null}
      {disp === 1 ? (
        <InstituteForm
          setFirstInstitute={setFirstInstitute}
          disp={disp}
          setDisp={setDisp}
          setErr={setErr}
          onOpen={onOpen}
        />
      ) : null}
      {/* {userData && firstInstitute ? (
        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" onClick={() => handleSubmit()}>
            Create Account
          </Button>
          <Button onClick={() => setRegister(false)}>Back</Button>
        </ButtonGroup>
      ) : null} */}
    </VStack>
  );
};

export default SignUp;
