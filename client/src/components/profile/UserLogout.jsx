import React from "react";
import { useNavigate } from "react-router";
import { ButtonGroup, Button } from "@chakra-ui/react";

// Hooks
import postLogout from "../../api/postLogout";

const UserLogout = ({ setUser }) => {
  const handleLogout = async () => {
    await postLogout().then((res) => {
      setUser();
      navigate("/");
    });
  };

  const navigate = useNavigate();

  return (
    <ButtonGroup pos="absolute" top="0" right="20" m="1rem">
      <Button onClick={() => handleLogout()}>Log Out</Button>
    </ButtonGroup>
  );
};

export default UserLogout;
