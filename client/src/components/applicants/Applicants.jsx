import React, { useContext } from "react";
import { VStack } from "@chakra-ui/react";

// Context
import UserContext from "../../utils/UserContext";

// Components
import ApplicantsBox from "./ApplicantsBox";
import UserLogout from "../profile/UserLogout";

const Applicants = () => {
  // Context
  const { user, setUser } = useContext(UserContext);

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
