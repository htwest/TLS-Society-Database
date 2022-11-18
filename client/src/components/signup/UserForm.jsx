import { useNavigate } from "react-router";
import Form from "../forms/Form";

const UserForm = ({ userData, setUserData, nextStep }) => {
  // Input Data
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter Username",
      errorMessage: "Must Provide valid Username",
      label: "Create Username",
      pattern: "^[a-zA-Z0-9 ]*$",
      autoComplete: "off",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      errorMessage:
        "Password must be between 8 - 20 characters and include at least 1 upper case letter, 1 number, and 1 special character",
      label: "Create Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      autoComplete: "off",
      required: true,
    },
    {
      id: 3,
      name: "f_name",
      type: "text",
      placeholder: "Enter First Name",
      errorMessage: "Must Provide A First Name",
      label: "First Name",
      pattern: "^[a-zA-Z0-9 ]*$",
      autoComplete: "off",
      required: true,
    },
    {
      id: 4,
      name: "l_name",
      type: "text",
      placeholder: "Enter Last Name",
      errorMessage: "Must Provide A Last Name",
      label: "Last Name",
      pattern: "^[a-zA-Z0-9 ]*$",
      autoComplete: "off",
      required: true,
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Email must be valid",
      label: "Email",
      autoComplete: "off",
      required: true,
    },
  ];

  // Methods
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    nextStep();
  };

  const handleBack = (e) => {
    navigate("/");
  };

  return (
    <div className="user-form">
      <Form
        title="Sign Up"
        inputs={inputs}
        state={userData}
        setState={setUserData}
        onSubmit={handleSubmit}
        buttonText="Next"
        secondaryTitle="Back to Login"
        secondaryAction={handleBack}
      />
    </div>
  );
};

export default UserForm;
