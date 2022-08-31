import React from "react";
import { Text, Heading } from "@chakra-ui/react";

// Components
import UserUnapproved from "./UserUnapproved";
// import DBTable from "../table/DBTable";
import ModDrawer from "../mod/ModDrawer";
import InternshipTable from "../table/InternshipTable";

const UserBox = ({ userData }) => {
  return (
    <div className="user-container">
      <div className="user-greet">
        <Heading color="white.100">Welcome</Heading>
        <Text color="white.100" fontSize="3xl">
          {userData.username}
        </Text>
      </div>
      {userData.approved ? <InternshipTable /> : <UserUnapproved />}
      {userData.mod ? <ModDrawer /> : null}
    </div>
  );
};

export default UserBox;
