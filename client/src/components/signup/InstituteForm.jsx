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
  const [instErr, setInstErr] = useState();
  const [semErr, setSemErr] = useState();
  const [pocErr, setPocErr] = useState();
  const [deadlineErr, setDeadlineErr] = useState();
  const [descErr, setDesErr] = useState();
  // Methods
  const errorCheck = (errors) => {
    errors.forEach((element) => {
      switch (element) {
        case "institute":
          setInstErr(true);
          break;
        case "semester":
          setSemErr(true);
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
      <FormControl isInvalid={instErr}>
        <FormLabel>Institute</FormLabel>
        <Input
          type="text"
          name="institute"
          placeholder="Name of Institute"
          value={institute.institute}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setInstitute({ ...institute, institute: e.target.value });
            setInstErr(false);
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
        <FormErrorMessage>Please Select A Semseter</FormErrorMessage>
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
