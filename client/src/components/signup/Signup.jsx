import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  VStack,
  Heading,
  ButtonGroup,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

// Components
import ErrorModal from "./ErrorModal";
import formDisplay from "./FormDisplay";

// Api
// import postRegister from "../../../api/postRegister";

const SignUp = () => {
  // States
  const [step, setStep] = useState(0);
  const [err, setErr] = useState();

  const formTitles = ["Sign Up", "First Institute", "Second Institute"];

  const navigate = useNavigate();

  // Error Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Methods

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const prevStep = () => {
    setStep((currentStep) => currentStep - 1);
  };

  const handleSubmit = async () => {
    // await postRegister(userData).then((data) => {
    //   setRegister(false);
    // });
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
      <Heading>{formTitles[step]}</Heading>
      <div className="register-body">{formDisplay(step)}</div>
      <ButtonGroup>
        {step === 0 ? (
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Log In
          </Button>
        ) : (
          <Button onClick={prevStep}>Back</Button>
        )}
        {step === 2 ? (
          <Button onClick={handleSubmit}>Submit</Button>
        ) : (
          <Button onClick={nextStep}>Next</Button>
        )}
      </ButtonGroup>
    </VStack>
  );
};

export default SignUp;
