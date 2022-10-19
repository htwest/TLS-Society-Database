import React, { useContext } from "react";
import { VStack } from "@chakra-ui/react";
import "../../css/dashboard/dashboard.css";

// Context
import UserContext from "../../utils/UserContext";
import TableContext from "../../utils/TableContext";

// Components
import UserBox from "./UserBox";
// import NavBox from "../navigation/NavBox";
import Navbar from "../navigation-two/Navbar";

const Dashboard = () => {
  // Context
  const { user } = useContext(UserContext);

  return (
    <TableContext.Provider value="dashboard">
      <VStack
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        spacing="1rem"
      >
        {/* {user ? <NavBox /> : null} */}
        {user ? <Navbar /> : null}
        {user ? <UserBox userData={user} /> : null}
      </VStack>
    </TableContext.Provider>
  );
};

export default Dashboard;
