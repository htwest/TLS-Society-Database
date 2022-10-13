import React, { useState } from "react";
import { VStack, Heading, Box } from "@chakra-ui/react";
import "../../css/signup/Signup.css";

// Components
import UserForm from "./UserForm";
import InstituteForm from "./InstituteForm";
import Review from "./Review";
import Review2 from "./Review2";
import Thanks from "./Thanks";

const SignUp = () => {
  // States
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    f_name: "",
    l_name: "",
    email: "",
  });
  const [institute, setInstitute] = useState({
    name: "",
    semester: "",
    position: "",
    type: "",
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
            institute={institute}
            setInstitute={setInstitute}
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <Review2
            userData={userData}
            institute={institute}
            step={step}
            setStep={setStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return <Thanks userData={userData} />;
      default:
        return <UserForm userData={userData} setUserData={setUserData} />;
    }
  };

  const formTitles = ["Sign Up", "Institute Information", "Almost There!"];

  // Methods
  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const prevStep = () => {
    setStep((currentStep) => currentStep - 1);
  };

  return (
    <VStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      spacing="1rem"
    >
      <Box h="10vh" w="100%" />
      <Heading color="white.200">{formTitles[step]}</Heading>
      <div className="register-body">{FormDisplay()}</div>
      <Box h="5vh" />
    </VStack>
  );
};

export default SignUp;
