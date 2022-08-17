import React from "react";
import { VStack, Text, Heading } from "@chakra-ui/react";

import PendingList from "./PendingList";

const Pending = () => {
  return (
    <VStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      <PendingList />
    </VStack>
  );
};

export default Pending;
