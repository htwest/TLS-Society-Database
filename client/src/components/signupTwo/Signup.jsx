import React, { useState } from "react";
import "../../css/signup/Signup.css";
import "../../css/buttons/buttons.css";

// Components
import UserForm from "./UserForm";
import InstituteForm from "./InstituteForm";
import Review from "./Review";
// import Review2 from "./Review2";
// import Thanks from "./Thanks";

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
          <Review
            userData={userData}
            institute={institute}
            step={step}
            setStep={setStep}
            nextStep={nextStep}
          />
        );
      // case 3:
      //   return <Thanks userData={userData} />;
      default:
        return <UserForm userData={userData} setUserData={setUserData} />;
    }
  };

  // Methods
  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const prevStep = () => {
    setStep((currentStep) => currentStep - 1);
  };

  return <div className="register-body">{FormDisplay()}</div>;
};

export default SignUp;
