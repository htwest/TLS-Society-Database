import React, { useState, useEffect } from "react";
import {
  VStack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Select,
  Text,
  Textarea,
  SimpleGrid,
} from "@chakra-ui/react";

// Hooks
import validateForm from "../../../hooks/validateForm";

const InstituteForm = ({
  firstInstitute,
  setFirstInstitute,
  setErr,
  onOpen,
  disp,
  setDisp,
}) => {
  // States
  const [institute, setInstitute] = useState();
  const [semester, setSemester] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [date, setDate] = useState(new Date());
  const [deadline, setDeadline] = useState(new Date());
  const [desc, setDesc] = useState();

  // Effects
  useEffect(() => {
    if (firstInstitute) {
      setInstitute(firstInstitute.institute);
      setSemester(firstInstitute.semester);
      setName(firstInstitute.name);
      setEmail(firstInstitute.email);
      setDate(firstInstitute.date);
      setDeadline(firstInstitute.deadline);
      setDesc(firstInstitute.desc);
    }
  }, [firstInstitute]);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      institute,
      semester,
      name,
      email,
      date,
      deadline,
      desc,
    };
    const validate = validateForm(setErr, onOpen, data);
    if (validate) {
      setFirstInstitute(data);
      setDisp(disp + 1);
    }
  };

  return (
    <VStack
      as="form"
      w={{ base: "90%", md: "500px" }}
      onSubmit={(e) => handleSubmit(e)}
      m="auto"
      justify="center"
      spacing="1rem"
    >
      <Heading size="md">Institute Info</Heading>
      <FormControl>
        <FormLabel>Institute</FormLabel>
        <Input
          type="text"
          name="institute_name"
          value={institute}
          placeholder="Name of Institute"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setInstitute(e.target.value);
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Semester</FormLabel>
        <Select
          name="institute_semester"
          placeholder="Select Semester"
          onChange={(e) => {
            setSemester(e.target.value);
          }}
        >
          <option value="Spring">Spring</option>
          <option value="Fall">Fall</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Dates</FormLabel>
        <SimpleGrid columns={2} spacing={10}>
          <VStack justify="center">
            <Text>Start Date</Text>
            <Input
              size="lg"
              type="datetime-local"
              onChange={(e) => setDate(e.target.value)}
            />
          </VStack>
          <VStack justify="center">
            <Text>Deadline</Text>
            <Input
              size="lg"
              type="datetime-local"
              onChange={(e) => setDeadline(e.target.value)}
            />
          </VStack>
        </SimpleGrid>
      </FormControl>

      <FormControl>
        <FormLabel>Point of Contact</FormLabel>
        <SimpleGrid columns={2} spacing={10}>
          <Input
            type="text"
            name="poc_name"
            value={name}
            placeholder="Full Name"
            autoComplete="off"
            size="lg"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="text"
            name="poc_email"
            value={email}
            placeholder="Email"
            autoComplete="off"
            size="lg"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </SimpleGrid>
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="Please provie a short description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </FormControl>

      <ButtonGroup pt="1rem">
        <Button colorScheme="teal" type="submit">
          Next
        </Button>
        <Button onClick={() => setDisp(disp - 1)}>Back</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default InstituteForm;
