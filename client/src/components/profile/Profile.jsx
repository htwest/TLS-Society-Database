import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { VStack, ButtonGroup, Button } from "@chakra-ui/react";

import getUser from "../../api/getUser";

import UserHeader from "./UserHeader";

const Profile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      await getUser().then((res) => {
        setUser(res.data);
        console.log(res.data);
      });
    };
    fetchUser();
  }, []);

  const navigate = useNavigate();

  return (
    <VStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      {user ? <UserHeader userData={user} /> : null}
      <ButtonGroup pt="1rem">
        <Button onClick={() => navigate("/")}>Back</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Profile;
