import React, { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/react";

// Hooks
import fetchUser from "../../hooks/fetchUser";

// Components
import ApplicantsBox from "./ApplicantsBox";
import UserLogout from "../profile/UserLogout";

const Applicants = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetchUser(setUser);
  }, []);

  return (
    <VStack
      w={{ base: "90%", md: "800px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      {user ? <ApplicantsBox userData={user} /> : null}
      {user ? <UserLogout setUser={setUser} /> : null}
    </VStack>
  );
};

export default Applicants;
