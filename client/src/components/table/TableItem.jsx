import React from "react";
import { Tr, Td } from "@chakra-ui/react";

const TableItem = () => {
  return (
    <>
      <Tr>
        <Td>Lerner and Row</Td>
        <Td>Fall</Td>
        <Td>Billy Boid</Td>
        <Td>7/24/22</Td>
        <Td>8/01/22</Td>
      </Tr>
      <Tr>
        <Td>Shane Co</Td>
        <Td>Fall</Td>
        <Td>Shane Man</Td>
        <Td>8/09/22</Td>
        <Td>8/21/22</Td>
      </Tr>
      <Tr>
        <Td>JellyBean Factory</Td>
        <Td>Fall</Td>
        <Td>Mr. Jellybelly</Td>
        <Td>6/29/22</Td>
        <Td>8/13/22</Td>
      </Tr>
      <Tr>
        <Td>Four Seasons</Td>
        <Td>Fall</Td>
        <Td>Rudy Guilanni</Td>
        <Td>7/14/22</Td>
        <Td>8/13/22</Td>
      </Tr>
    </>
  );
};

export default TableItem;
