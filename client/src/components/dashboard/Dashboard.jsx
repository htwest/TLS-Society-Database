import React, { useContext } from "react";
import { VStack } from "@chakra-ui/react";
import "../../css/dashboard/dashboard.css";

// Context
import UserContext from "../../utils/UserContext";

// Components
import UserBox from "./UserBox";
import NavBox from "../navigation/NavBox";

const Dashboard = () => {
  // Context
  const { user } = useContext(UserContext);

  return (
    <VStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      spacing="1rem"
    >
      {user ? <NavBox /> : null}
      {user ? <UserBox userData={user} /> : null}
    </VStack>
  );
};

export default Dashboard;
