import React, { useContext } from "react";
import { VStack } from "@chakra-ui/react";

// Context
import UserContext from "../../utils/UserContext";

// Components
import UserBox from "./UserBox";
import UserLogout from "./UserLogout";

const Profile = () => {
  // Context
  const { user, setUser } = useContext(UserContext);

  return (
    <VStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      spacing="1rem"
    >
      {/* <img src={redBanner} alt="banner" className="banner-image" /> */}
      {user ? <UserBox userData={user} /> : null}
      {user ? <UserLogout setUser={setUser} /> : null}
    </VStack>
  );
};

export default Profile;
