import React, { useState, useEffect } from "react";

import { VStack } from "@chakra-ui/react";

// Hooks
import fetchUser from "../../hooks/fetchUser";

// Components
import UserBox from "./UserBox";
import UserLogout from "./UserLogout";

const Profile = () => {
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
      {user ? <UserBox userData={user} /> : null}
      {user ? <UserLogout setUser={setUser} /> : null}
    </VStack>
  );
};

export default Profile;
