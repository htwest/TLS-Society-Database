import React, { useState } from "react";
import {
  VStack,
  Input,
  Divider,
  Text,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { Table, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

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
      <Text color="white.200">
        Please Make Sure All Information is Correct Before Submitting
      </Text>

      <Box h="30px" />
      <Divider />
      <Box h="30px" />

      <Text color="white.200">User Information</Text>
      <Table className="content-table">
        <Tbody className="table-body">
          <Tr className="table-row">
            <Th className="table-head">Username</Th>
            <Td className="table-data">{userData.username}</Td>
          </Tr>
          <Tr className="table-row">
            <Th className="table-head">Name</Th>
            <Td className="table-data">
              {userData.f_name} {userData.l_name}
            </Td>
          </Tr>
          <Tr className="table-row">
            <Th className="table-head">Email</Th>
            <Td className="table-data">{userData.email}</Td>
          </Tr>
        </Tbody>
      </Table>
      <Button onClick={() => setStep(0)}>Edit</Button>

      <Box h="30px" />
      <Divider />
      <Box h="30px" />

      <Text color="white.200">Institute Information</Text>
      <Table className="content-table">
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
