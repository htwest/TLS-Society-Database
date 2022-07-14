import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const UnapprovedTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Awaiting Approval</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Application</Th>
            <Th>Approve</Th>
            <Th>Reject</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Han Solo</Td>
            <Td>millimetres (mm)</Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
          </Tr>
          <Tr>
            <Td>Han Solo</Td>
            <Td>millimetres (mm)</Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
          </Tr>
          <Tr>
            <Td>Han Solo</Td>
            <Td>millimetres (mm)</Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Td>Han Solo</Td>
            <Td>millimetres (mm)</Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default UnapprovedTable;
