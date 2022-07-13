import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { VStack, ButtonGroup, Button } from "@chakra-ui/react";

import getUser from "../../api/getUser";
import postLogout from "../../api/postLogout";

import UserHeader from "./UserHeader";

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
      {user ? <UserHeader userData={user} /> : null}
      <ButtonGroup pt="1rem">
        <Button onClick={() => handleLogout()}>Log Out</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Profile;
