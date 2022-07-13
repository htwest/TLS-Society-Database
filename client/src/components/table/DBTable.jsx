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

import getList from "../../api/getList";

import TableItem from "./TableItem";

const DBTable = () => {
  const [dbList, setDbList] = useState();

  useEffect(() => {
    const fetchList = async () => {
      await getList().then((res) => {
        setDbList(res);
      });
    };
    fetchList();
  }, []);

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
          {dbList.map((item) => (
            <TableItem item={item} key={item.id} />
          ))}
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
