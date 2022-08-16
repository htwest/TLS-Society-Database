import React, { useState } from "react";
import {
  VStack,
  Input,
  Divider,
  Text,
  TableContainer,
  Table,
  TableCaption,
  Th,
  Tr,
  Td,
  Tbody,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";

import postApplicant from "../../api/postApplicant";
import validatePassword from "../../hooks/validatePassword";

const Review = ({ userData, institute, step, setStep, nextStep }) => {
  // States
  const [pass, setPass] = useState();
  const [err, setErr] = useState();

  // Methods
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validatePassword(userData.password, pass, setErr);
    if (validate) {
      const data = {
        userData,
        institute,
      };
      await postApplicant(data).then((res) => {
        nextStep();
      });
    }
  };

  return (
    <VStack
      justify="center"
      spacing="1rem"
      w={{ base: "250px", sm: "250px", md: "500px", lg: "700px" }}
    >
      <Heading>Almost There!</Heading>
      <Text>Please Make Sure All Information is Correct Before Submitting</Text>

      <Text>User Information</Text>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>User Information</TableCaption>
          <Tbody>
            <Tr>
              <Th>Username</Th>
              <Td>{userData.username}</Td>
            </Tr>
            <Tr>
              <Th>Name</Th>
              <Td>
                {userData.f_name} {userData.l_name}
              </Td>
            </Tr>
            <Tr>
              <Th>Email</Th>
              <Td>{userData.email}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Button onClick={() => setStep(0)}>Edit</Button>

      <Box h="30px" />
      <Divider />
      <Box h="30px" />

      <Text>Institute Information</Text>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Institute Information</TableCaption>
          <Tbody>
            <Tr>
              <Th>Institute</Th>
              <Td>{institute.name}</Td>
            </Tr>
            <Tr>
              <Th>Semester</Th>
              <Td>{institute.semester}</Td>
            </Tr>

            <Tr>
              <Th>Position</Th>
              <Td>{institute.position}</Td>
            </Tr>

            <Tr>
              <Th>Type</Th>
              <Td>{institute.type}</Td>
            </Tr>

            <Tr>
              <Th>Point of Contact</Th>
              <Td>{institute.poc_name}</Td>
            </Tr>
            <Tr>
              <Th>P.O.C Email</Th>
              <Td>{institute.poc_email}</Td>
            </Tr>
            <Tr>
              <Th>Start Date</Th>
              <Td>{institute.app_open}</Td>
            </Tr>
            <Tr>
              <Th>Deadline</Th>
              <Td>{institute.app_deadline}</Td>
            </Tr>
            <Tr>
              <Th>Description</Th>
              <Td>{institute.description}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Button onClick={() => setStep(1)}>Edit</Button>

      <Box h="30px" />
      <Divider />
      <Box h="30px" />

      <FormControl isInvalid={err}>
        <VStack justify="center">
          <FormLabel>Enter Your Password</FormLabel>
        </VStack>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={pass}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setPass(e.target.value);
            setErr(false);
          }}
        />
        <FormErrorMessage>Your Password Does Not Match</FormErrorMessage>
      </FormControl>
      <Button colorScheme="teal" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </VStack>
  );
};

export default Review;
