import React, { useState, useEffect } from "react";
import { VStack, Heading } from "@chakra-ui/react";

// Hooks
import fetchUser from "../../hooks/fetchUser";

// Components
import UnapprovedBox from "./UnapprovedBox";
import UserLogout from "../profile/UserLogout";

const UnapprovedPage = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetchUser(setUser);
  }, []);

  return (
    <VStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      {user ? <UnapprovedBox userData={user} /> : null}
      {user ? <UserLogout setUser={setUser} /> : null}
    </VStack>
  );
};

export default UnapprovedPage;
