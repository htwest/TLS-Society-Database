import React from "react";
import { VStack, Text, Heading } from "@chakra-ui/react";

// Components
import UserUnapproved from "./UserUnapproved";
// import DBTable from "../table/DBTable";
import ModDrawer from "../mod/ModDrawer";
import InternshipTable from "../table/InternshipTable";

const UserBox = ({ userData }) => {
  return (
    <VStack>
      <Heading>Welcome</Heading>
      <Text fontSize="3xl">{userData.username}</Text>
      {userData.approved ? <InternshipTable /> : <UserUnapproved />}
      {userData.mod ? <ModDrawer /> : null}
    </VStack>
  );
};

export default UserBox;
