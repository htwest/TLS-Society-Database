import React, { useState } from "react";
import { VStack, Heading } from "@chakra-ui/react";

// Components
import UserForm from "./UserForm";
import InstituteForm from "./InstituteForm";
import Review from "./Review";

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
    app_deadline: "",
    description: "",
  });

  // Misc
  const FormDisplay = () => {
    switch (step) {
      case 0:
        return (
          <UserForm
            userData={userData}
            setUserData={setUserData}
            nextStep={nextStep}
          />
        );
      case 1:
        return (
          <InstituteForm
            institute={firstInstitute}
            setInstitute={setFirstInstitute}
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <InstituteForm
            institute={secondInstitute}
            setInstitute={setSecondInstitute}
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return <Review />;
      default:
        return <UserForm userData={userData} setUserData={setUserData} />;
    }
  };
  const formTitles = ["Sign Up", "First Institute", "Second Institute"];

  // Methods
  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
    console.log(step);
  };

  const prevStep = () => {
    setStep((currentStep) => currentStep - 1);
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
    </VStack>
  );
};

export default SignUp;
