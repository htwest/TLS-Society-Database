import React from "react";
import { VStack, Text, Heading } from "@chakra-ui/react";

import UserUnapproved from "./UserUnapproved";

const UserBox = ({ userData }) => {
  return (
    <VStack>
      <Heading>Welcome</Heading>
      <Text fontSize="3xl">{userData.user_name}</Text>
      {userData.user_approved ? null : <UserUnapproved />}
    </VStack>
  );
};

export default UserBox;
