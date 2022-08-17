import React from "react";
import { VStack, Text, Heading } from "@chakra-ui/react";

// Components
import UserUnapproved from "./UserUnapproved";
import DBTable from "../table/DBTable";
import ModDrawer from "../mod/ModDrawer";

const UserBox = ({ userData }) => {
  return (
    <VStack>
      <Heading>Welcome</Heading>
      <Text fontSize="3xl">{userData.user_name}</Text>
      {userData.approved ? <DBTable /> : <UserUnapproved />}
      {userData.mod ? <ModDrawer /> : null}
    </VStack>
  );
};

export default UserBox;
