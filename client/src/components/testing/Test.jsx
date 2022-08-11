import React from "react";
import { VStack } from "@chakra-ui/react";

import UserMaker from "./UserMaker";

const Test = () => {
  return (
    <VStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      <UserMaker />
    </VStack>
  );
};

export default Test;
