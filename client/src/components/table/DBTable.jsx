import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import TableItem from "./TableItem";

const DBTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Internship Programs</TableCaption>
        <Thead>
          <Tr>
            <Th>Institute</Th>
            <Th>Fall/Spring</Th>
            <Th>P.O.C</Th>
            <Th isNumeric>Application Open</Th>
            <Th isNumeric>Deadline</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableItem />
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Institute</Th>
            <Th>Fall/Spring</Th>
            <Th>P.O.C</Th>
            <Th isNumeric>Application Open</Th>
            <Th isNumeric>Deadline</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default DBTable;
