import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

// Hooks
import validateForm from "../../hooks/validateForm";

const InstituteForm = ({
  institute,
  setInstitute,
  step,
  nextStep,
  prevStep,
}) => {
  // States
  const [nameErr, setNameErr] = useState();
  const [semErr, setSemErr] = useState();
  const [typeErr, setTypeErr] = useState();
  const [positionErr, setPositionErr] = useState();
  const [pocErr, setPocErr] = useState();
  const [deadlineErr, setDeadlineErr] = useState();
  const [descErr, setDesErr] = useState();

  // Methods
  const errorCheck = (errors) => {
    errors.forEach((element) => {
      switch (element) {
        case "name":
          setNameErr(true);
          break;
        case "semester":
          setSemErr(true);
          break;
        case "position":
          setPositionErr(true);
          break;
        case "type":
          setTypeErr(true);
          break;
        case "poc_name" || "poc_email":
          setPocErr(true);
          break;
        case "app_open" || "app_deadline":
          setDeadlineErr(true);
          break;
        case "description":
          setDesErr(true);
          break;
        default:
          break;
      }
    });
  };

  const handleNext = () => {
    const validate = validateForm(institute, errorCheck);
    if (validate) {
      nextStep();
    }
  };

  return (
    <VStack justify="center" spacing="1rem">
      <FormControl isInvalid={nameErr}>
        <FormLabel>Institute</FormLabel>
        <Input
          type="text"
          name="institute"
          placeholder="Name of Institute"
          value={institute.name}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setInstitute({ ...institute, name: e.target.value });
            setNameErr(false);
          }}
        />
        <FormErrorMessage>
          Please Provide the Name of the Institute
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={semErr}>
        <FormLabel>Semester</FormLabel>
        <Select
          placeholder="Select Semester"
          value={institute.semester}
          onChange={(e) => {
            setInstitute({ ...institute, semester: e.target.value });
            setSemErr(false);
          }}
        >
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
        </Select>
        <FormErrorMessage>Please Select A </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={typeErr}>
        <FormLabel>Type of Law</FormLabel>
        <Select
          placeholder="Select Field"
          value={institute.type}
          onChange={(e) => {
            setInstitute({ ...institute, type: e.target.value });
            setTypeErr(false);
          }}
        >
          <option value="Government">Government</option>
          <option value="Emerging Technology">Emerging Technology</option>
          <option value="AI">AI</option>
          <option value="National Security">National Security</option>
          <option value="E-Commerce">E-Commerce</option>
          <option value="Other">Other</option>
        </Select>
        <FormErrorMessage>Please Select A Law Type</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={positionErr}>
        <FormLabel>Position</FormLabel>
        <Input
          type="text"
          name="institute"
          placeholder="Position In Program"
          value={institute.position}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setInstitute({ ...institute, position: e.target.value });
            setPositionErr(false);
          }}
        />
        <FormErrorMessage>
          Please Provide the Postition in the Program
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={pocErr}>
        <FormLabel>Point of Contact</FormLabel>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Input
              type="text"
              name="name"
              value={institute.poc_name}
              placeholder="Full Name"
              autoComplete="off"
              size="lg"
              onChange={(e) => {
                setInstitute({ ...institute, poc_name: e.target.value });
                setPocErr(false);
              }}
            />
          </GridItem>
          <GridItem>
            <Input
              type="text"
              name="email"
              value={institute.poc_email}
              placeholder="Email"
              autoComplete="off"
              size="lg"
              onChange={(e) => {
                setInstitute({ ...institute, poc_email: e.target.value });
                setPocErr(false);
              }}
            />
          </GridItem>
        </Grid>
        <FormErrorMessage>
          Please Provide P.O.C's Name and Email
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={deadlineErr}>
        <FormLabel>Application Deadlines</FormLabel>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Text>Start</Text>
            <Input
              size="lg"
              type="datetime-local"
              value={institute.app_open}
              onChange={(e) => {
                setInstitute({ ...institute, app_open: e.target.value });
                setDeadlineErr(false);
              }}
            />
          </GridItem>
          <GridItem>
            <Text>End</Text>
            <Input
              size="lg"
              type="datetime-local"
              value={institute.app_deadline}
              onChange={(e) => {
                setInstitute({ ...institute, app_deadline: e.target.value });
                setDeadlineErr(false);
              }}
            />
          </GridItem>
        </Grid>
        <FormErrorMessage>Please Provide Proper Deadlines</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={descErr}>
        <FormLabel>Description</FormLabel>
        <Textarea
          name="desc"
          placeholder="Please provide a short description..."
          value={institute.description}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setInstitute({ ...institute, description: e.target.value });
            setDesErr(false);
          }}
        />
        <FormErrorMessage>
          Please Write A Short Description of the Program
        </FormErrorMessage>
      </FormControl>

      <ButtonGroup>
        <Button onClick={() => prevStep()}>Back</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default InstituteForm;
