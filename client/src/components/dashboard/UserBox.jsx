import React from "react";
import { Text, Heading } from "@chakra-ui/react";

// Components
import UserUnapproved from "./UserUnapproved";
import TableDock from "../table/TableDock";

const UserBox = ({ userData }) => {
  return (
    <div className="user-container">
      <div className="user-greet">
        <Heading color="white.100">Welcome</Heading>
        <Text color="white.100" fontSize="3xl">
          {userData.username}
        </Text>
      </div>
      {userData.approved ? <TableDock /> : <UserUnapproved />}
    </div>
  );
};

export default UserBox;
