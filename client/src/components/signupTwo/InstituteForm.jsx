import Form from "../forms/Form";

const InstituteForm = ({
  institute,
  setInstitute,
  step,
  nextStep,
  prevStep,
}) => {
  // *******************
  // Input Data
  // *******************
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter Name of Institute",
      errorMessage: "Must Provide Name of the Institute",
      label: "Name of Institute",
      pattern: "^[a-zA-Z0-9 ]*$",
      autoComplete: "off",
      required: true,
    },
    {
      id: 2,
      name: "semester",
      type: "select",
      errorMessage: "Must select Semester",
      label: "Semester",
      required: true,
      options: [
        {
          id: 1,
          value: "",
          disabled: true,
          defaultValue: true,
          hidden: true,
          name: "Choose a Semester",
        },
        {
          id: 2,
          name: "Spring",
          value: "Spring",
        },
        {
          id: 3,
          name: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      id: 3,
      name: "position",
      type: "text",
      placeholder: "Enter Position Title",
      label: "Position in Institution",
      errorMessage: "Must Enter Valid Position Title",
      pattern: "^[a-zA-Z0-9 ]*$",
      autoComplete: "off",
      required: true,
    },
    {
      id: 4,
      name: "type",
      type: "select",
      label: "Type of Law",
      required: true,
      options: [
        {
          id: 1,
          value: "",
          disabled: true,
          defaultValue: true,
          hidden: true,
          name: "Choose a Field",
        },
        {
          id: 2,
          name: "Government",
          value: "Government",
        },
        {
          id: 3,
          name: "Emerging Technology",
          value: "Emerging Technology",
        },
        {
          id: 4,
          name: "National Security",
          value: "National Security",
        },
        {
          id: 5,
          name: "E-Commerce",
          value: "E-Commerce",
        },
        {
          id: 6,
          name: "Other",
          value: "Other",
        },
      ],
    },
    {
      id: 5,
      name: "poc_name",
      type: "text",
      placeholder: "Enter Name",
      errorMessage: "Name must be valid",
      label: "Point of Contact",
      autoComplete: "off",
      required: true,
    },
    {
      id: 6,
      name: "poc_email",
      type: "email",
      placeholder: "Enter Email",
      errorMessage: "Email must be valid",
      label: "Contact Email",
      autoComplete: "off",
      required: true,
    },
    {
      id: 7,
      name: "app_open",
      type: "date",
      errorMessage: "Must Enter Valid Date",
      label: "Application Start Date",
      required: true,
    },
    {
      id: 8,
      name: "app_deadline",
      type: "date",
      errorMessage: "Must Enter Valid Deadline",
      label: "Application Deadline",
      required: true,
    },
    {
      id: 9,
      name: "description",
      type: "textarea",
      errorMessage: "Please Enter a Description",
      label: "Description",
      placeholder: "Enter a short description of the internship",
      required: true,
    },
  ];

  // Methods
  const handleSubmit = (e) => {
    nextStep();
  };

  const handleBack = (e) => {
    prevStep();
  };

  return (
    <div className="institute-form">
      <Form
        title="Institute Information"
        inputs={inputs}
        state={institute}
        setState={setInstitute}
        onSubmit={handleSubmit}
        buttonText="Next"
        secondaryTitle="Back"
        secondaryAction={handleBack}
      />
    </div>
  );
};

export default InstituteForm;
