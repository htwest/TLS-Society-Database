import React, { useState, useEffect } from "react";
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

// Hooks
import fetchList from "../../hooks/fetchList";

// Components
import TableItem from "./TableItem";

const DBTable = () => {
  const [dbList, setDbList] = useState();

  useEffect(() => {
    fetchList(setDbList);
  }, []);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Internship Programs</TableCaption>
        <Thead>
          <Tr>
            <Th>Institute</Th>
            <Th>Semester</Th>
            <Th>Position</Th>
            <Th>Type of Law</Th>
            <Th>Point of Contact</Th>
            <Th isNumeric>Application Open</Th>
            <Th isNumeric>Deadline</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dbList
            ? dbList.map((item) => <TableItem item={item} key={item.id} />)
            : null}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Institute</Th>
            <Th>Semester</Th>
            <Th>Position</Th>
            <Th>Type of Law</Th>
            <Th>Point of Contact</Th>
            <Th isNumeric>Application Open</Th>
            <Th isNumeric>Deadline</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default DBTable;
