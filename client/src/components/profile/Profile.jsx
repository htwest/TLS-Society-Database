import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { VStack, ButtonGroup, Button } from "@chakra-ui/react";

// Hooks
import fetchUser from "../../hooks/fetchUser";
import postLogout from "../../api/postLogout";

// Components
import UserBox from "./UserBox";

const Profile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetchUser(setUser);
  }, []);

  const handleLogout = async () => {
    await postLogout().then((res) => {
      setUser();
      navigate("/");
    });
  };

  const navigate = useNavigate();

  return (
    <VStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      {user ? <UserBox userData={user} /> : null}

      <ButtonGroup pos="absolute" top="0" right="20" m="1rem">
        <Button onClick={() => handleLogout()}>Log Out</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Profile;
