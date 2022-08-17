import React from "react";
import { Tr, Td } from "@chakra-ui/react";

const TableItem = ({ item }) => {
  return (
    <Tr>
      <Td>{item.institute}</Td>
      <Td>{item.semester}</Td>
      <Td>{item.position}</Td>
      <Td>{item.type}</Td>
      <Td>{item.poc_name}</Td>
      <Td>{item.app_open}</Td>
      <Td>{item.app_deadline}</Td>
    </Tr>
  );
};

export default TableItem;
