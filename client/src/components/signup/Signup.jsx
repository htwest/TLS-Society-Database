import React, { useState } from "react";
import { useNavigate } from "react-router";
import { VStack, Heading, ButtonGroup, Button } from "@chakra-ui/react";

// Components
import UserForm from "./UserForm";
import InstituteForm from "./InstituteForm";

// Api
// import postRegister from "../../../api/postRegister";

const SignUp = () => {
  // States
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    fName: "",
    lName: "",
    email: "",
  });
  const [firstInstitute, setFirstInstitute] = useState({
    institute: "",
    semester: "",
    poc_name: "",
    poc_email: "",
    app_open: "",
    app_deadline: "",
    description: "",
  });
  const [secondInstitute, setSecondInstitute] = useState({
    institute: "",
    semester: "",
    poc_name: "",
    poc_email: "",
    app_open: "",
    app_dealine: "",
    description: "",
  });

  // Misc
  const FormDisplay = () => {
    switch (step) {
      case 0:
        return <UserForm userData={userData} setUserData={setUserData} />;
      case 1:
        return (
          <InstituteForm
            institute={firstInstitute}
            setInstitute={setFirstInstitute}
          />
        );
      case 2:
        return (
          <InstituteForm
            institute={secondInstitute}
            setInstitute={setSecondInstitute}
          />
        );
      default:
        return <UserForm userData={userData} setUserData={setUserData} />;
    }
  };
  const formTitles = ["Sign Up", "First Institute", "Second Institute"];
  const navigate = useNavigate();

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
      <Heading>{formTitles[step]}</Heading>
      <div className="register-body">{FormDisplay()}</div>
      <ButtonGroup>
        {step === 0 ? (
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Log In
          </Button>
        ) : (
          <Button onClick={prevStep}>Back</Button>
        )}
        {step === 2 ? (
          <Button colorScheme="teal" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button onClick={nextStep}>Next</Button>
        )}
      </ButtonGroup>
    </VStack>
  );
};

export default SignUp;
