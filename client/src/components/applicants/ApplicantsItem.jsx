import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";

const ApplicantsItem = ({ item, onOpen }) => {
  return (
    <Tr>
      <Td>{item.user_name}</Td>
      <Td>
        <Button colorScheme="blue" onClick={onOpen}>
          Application
        </Button>
      </Td>
      <Td>
        <Button>Accept</Button>
      </Td>
      <Td>
        <Button>Reject</Button> (mm)
      </Td>
    </Tr>
  );
};

export default ApplicantsItem;
