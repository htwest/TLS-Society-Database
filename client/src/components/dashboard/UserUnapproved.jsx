import React from "react";
import { VStack, Text } from "@chakra-ui/react";

const UserUnapproved = () => {
  return (
    <VStack>
      <Text fontSize="lg" color="white">
        Your application is still being processed
      </Text>
      <Text fontSize="sm" color="white">
        Thank you for your patience!
      </Text>
    </VStack>
  );
};

export default UserUnapproved;
