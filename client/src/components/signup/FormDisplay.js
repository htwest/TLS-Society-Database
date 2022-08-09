import UserForm from "./UserForm";
import InstituteForm from "./InstituteForm";

const FormDisplay = (step) => {
  switch (step) {
    case 0:
      return <UserForm />;
    case 1:
      return <InstituteForm />;
    case 2:
      return <InstituteForm />;
    default:
      return <UserForm />;
  }
};

export default FormDisplay;
