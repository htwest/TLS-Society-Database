import React from "react";
import { useNavigate } from "react-router";
import { VStack, ButtonGroup, Button, Heading } from "@chakra-ui/react";

import getUser from "../../api/getUser";

const Profile = () => {
  const handleSubmit = async () => {
    await getUser().then((res) => {
      console.log(res.data);
    });
  };

  const navigate = useNavigate();

  return (
    <VStack>
      <Heading>User</Heading>
      <ButtonGroup pt="1rem">
        <Button
          colorScheme="teal"
          onClick={() => {
            handleSubmit();
          }}
        >
          Get User
        </Button>
        <Button onClick={() => navigate("/")}>Back</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Profile;
