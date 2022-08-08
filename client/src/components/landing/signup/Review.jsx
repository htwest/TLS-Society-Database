import React from "react";
import {
  VStack,
  ButtonGroup,
  Input,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";

const Review = () => {
  return (
    <VStack>
      <Heading>Just One More Thing</Heading>
      <Text>Please Make Sure all information is correct before submitting</Text>
      <ButtonGroup>
        <Button>User Information</Button>
        <Button>First Institution</Button>
        <Button>Second Institution</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Submit</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Review;
