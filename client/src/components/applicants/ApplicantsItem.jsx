import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";

import putApproveUser from "../../api/putApproveUser";

const ApplicantsItem = ({ item, onOpen, refreshComp }) => {
  const handleApprove = async () => {
    await putApproveUser(item.user_name);
    refreshComp();
    console.log("User Approved");
  };

  return (
    <Tr>
      <Td>{item.user_name}</Td>
      <Td>
        <Button colorScheme="blue" onClick={onOpen}>
          Application
        </Button>
      </Td>
      <Td>
        <Button onClick={handleApprove}>Accept</Button>
      </Td>
      <Td>
        <Button>Reject</Button>
      </Td>
    </Tr>
  );
};

export default ApplicantsItem;
