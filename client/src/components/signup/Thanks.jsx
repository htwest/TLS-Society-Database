import React from "react";
import { useNavigate } from "react-router";
import { VStack, Button, Divider, Text, Heading, Box } from "@chakra-ui/react";

const Thanks = ({ userData }) => {
  const navigate = useNavigate();
  return (
    <VStack>
      <Heading>Thank You</Heading>
      <Text>{userData.f_name}</Text>
      <Box h="30px" />
      <Divider />
      <Box h="30px" />
      <Text>Your information has been submitted and is awaiting approval.</Text>
      <Text>A TLSS Admin will soon verify your account.</Text>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Back To Log In
      </Button>
    </VStack>
  );
};

export default Thanks;
