import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { VStack, ButtonGroup, Button } from "@chakra-ui/react";

import getUser from "../../api/getUser";
import postLogout from "../../api/postLogout";

import UserBox from "./UserBox";

const Profile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      await getUser().then((res) => {
        setUser(res.data);
      });
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await postLogout().then((res) => {
      console.log(res.data);
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
