import React from "react";
import { VStack, Text, Heading } from "@chakra-ui/react";

const UserHeader = ({ userData }) => {
  return (
    <VStack>
      <Heading>Welcome</Heading>
      <Text fontSize="xl">{userData.user_name}</Text>
    </VStack>
  );
};

export default UserHeader;
