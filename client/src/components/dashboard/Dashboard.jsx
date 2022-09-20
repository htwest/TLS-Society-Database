import React, { useContext } from "react";
import { VStack } from "@chakra-ui/react";
import "../../css/dashboard/dashboard.css";

// BANNERS
// import redbanner from "../../images/redbanner.jpeg";
// import greenbanner from "../../images/greenbanner.jpeg";
// import yellowbanner from "../../images/yellowbanner.jpeg";
import bluebanner from "../../images/bluebanner.jpeg";

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
      <div className="banner-container">
        <img src={bluebanner} alt="banner" className="banner" />
      </div>
      {user ? <NavBox /> : null}
      {user ? <UserBox userData={user} /> : null}
    </VStack>
  );
};

export default Dashboard;
